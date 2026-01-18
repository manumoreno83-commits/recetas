import os
import re
from PIL import Image

# Configuration
ASSETS_DIR = os.path.abspath("assets")
SCRIPT_JS_PATH = os.path.abspath("js/script.js")
MAX_SIZE_MB = 1.0
MAX_DIMENSION = 1920  # Max width or height

def get_file_size_mb(file_path):
    return os.path.getsize(file_path) / (1024 * 1024)

def compress_image(file_path):
    try:
        with Image.open(file_path) as img:
            # Check if resize is needed
            if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
                img.thumbnail((MAX_DIMENSION, MAX_DIMENSION))
            
            # Save carefully to avoid quality loss if not needed, but here we want compression
            # We'll save to a temp file first to check size
            temp_path = file_path + ".temp"
            
            # Preserve orientation if possible (EXIF) - standard Pillow save might strip it, 
            # but usually for web we might want to strip EXIF or handle it. 
            # For simplicity, we just save.
            
            save_kwargs = {"optimize": True}
            if file_path.lower().endswith(".jpg") or file_path.lower().endswith(".jpeg"):
                save_kwargs["quality"] = 85
                save_kwargs["format"] = "JPEG"
            elif file_path.lower().endswith(".png"):
                save_kwargs["format"] = "PNG"
                # PNG compression is lossless, optimize=True helps
            
            img.save(temp_path, **save_kwargs)
            
            old_size = get_file_size_mb(file_path)
            new_size = get_file_size_mb(temp_path)
            
            if new_size < old_size:
                os.replace(temp_path, file_path)
                print(f"Compressed {os.path.basename(file_path)}: {old_size:.2f}MB -> {new_size:.2f}MB")
            else:
                os.remove(temp_path)
                print(f"Skipped {os.path.basename(file_path)}: No size reduction")
                
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def main():
    print("--- Verifying Images ---")
    
    # 1. Parse script.js for image references
    with open(SCRIPT_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find image: "path" or originalImage: "path"
    # Matches: image: "assets/foo.png" or image: 'assets/foo.png'
    img_pattern = re.compile(r'(?:image|originalImage)\s*:\s*["\']([^"\']+)["\']')
    referenced_images = set(img_pattern.findall(content))
    
    # Filter for external links
    external_links = [img for img in referenced_images if img.startswith('http')]
    if external_links:
        print("WARNING: Found external image links:")
        for link in external_links:
            print(f"  - {link}")
    else:
        print("OK: No external image links found.")

    # 2. Check if local referenced images exist
    missing_images = []
    local_referenced = []
    
    for img_path in referenced_images:
        if img_path.startswith('http'):
            continue
            
        # script.js paths are relative to root, e.g., "assets/foo.png"
        # We need to construct absolute path
        abs_path = os.path.join(os.path.dirname(SCRIPT_JS_PATH), "..", img_path)
        abs_path = os.path.abspath(abs_path)
        
        if not os.path.exists(abs_path):
            missing_images.append(img_path)
        else:
            local_referenced.append(abs_path)

    if missing_images:
        print("\nERROR: The following referenced images are missing:")
        for img in missing_images:
            print(f"  - {img}")
    else:
        print("OK: All referenced images exist.")

    # 3. Check for unused images in assets (top level only for now to correspond to script logic usually)
    # We scan ASSETS_DIR recursively
    assets_files = []
    for root, dirs, files in os.walk(ASSETS_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
                full_path = os.path.join(root, file)
                assets_files.append(full_path)

    # Normalize paths for comparison
    # local_referenced are absolute paths
    # assets_files are absolute paths
    
    # We need to be careful with normalization (slashes)
    local_referenced_norm = {os.path.normpath(p).lower() for p in local_referenced}
    assets_files_norm = {os.path.normpath(p).lower(): p for p in assets_files}
    
    unused = []
    for norm_path, original_path in assets_files_norm.items():
        if norm_path not in local_referenced_norm:
            # Check if it's referenced in index.html (e.g. apple-touch-icon, favicon, carousel)
            # This is a simple heuristic check
            filename = os.path.basename(original_path)
            # Special exceptions or known used files
            if "familia" in original_path or "favicon" in filename or "icon" in filename or "lili_profile" in filename or "mari_profile" in filename or "manuscrito_cocido" in filename or "manuscrito_estofado" in filename: 
                # Very rough heuristic, really we should grep index.html too
                continue
                
            unused.append(original_path)

    if unused:
        print(f"\nINFO: Found potential unused images (excluding known patterns like 'familia'):")
        # Just show first 10
        for p in unused[:10]:
            print(f"  - {os.path.relpath(p, os.path.dirname(ASSETS_DIR))}")
            
    # 4. Compress large images
    print("\n--- Optimizing Images ---")
    
    count = 0
    for file_path in assets_files:
        if get_file_size_mb(file_path) > MAX_SIZE_MB:
            if file_path.lower().endswith(('.jpg', '.jpeg', '.png')):
                print(f"Optimizing {os.path.basename(file_path)} ({get_file_size_mb(file_path):.2f} MB)...")
                compress_image(file_path)
                count += 1
    
    if count == 0:
        print("No images needed optimization.")
    else:
        print(f"Optimized {count} images.")

if __name__ == "__main__":
    main()
