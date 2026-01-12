document.addEventListener('DOMContentLoaded', () => {
    console.log('Recetas de las Abuelas está listo.');

    // Dummy data for visualization
    // Recipe Data
    const recipes = [
        {
            id: 'lili_mantecados_abuela_ana',
            title: "Mantecados de la Abuela Ana",
            abuela: "Lili",
            author: "Lili",
            category: "Postres",
            description: "Receta tradicional de mantecados con manteca, zumo de naranja y azúcar glas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 2 tarrinas de Manteca blanca<br>
                - 2 kg de Harina (repostería o trigo de buena calidad)<br>
                - 1/2 vaso de Zumo de Naranja<br>
                - Azúcar glas (para decorar)<br>
                - Papel de seda o servilletas (para envolver)<br><br>
                <strong>Preparación:</strong><br>
                1. Precalentar el horno a 180ºC.<br>
                2. Mezclar la manteca con la harina y el zumo poco a poco. Amasar hasta que las manos no se queden con grasa.<br>
                3. Dividir la masa en dos trozos para trabajar mejor. Dejar reposar 2 o 3 horas (opcional).<br>
                4. Espolvorear harina sobre la mesa y extender la masa con rodillo (altura de medio cm).<br>
                5. Cortar con un vaso o copa pequeña y colocar en la bandeja de horno.<br>
                6. Hornear hasta que se vean dorados.<br>
                7. Sacar con cuidado (usar una pala), pasar por azúcar glas y envolver en el papel de seda.
            `,
            image: "assets/mantecados_abuela_ana.png",
            originalImage: "assets/wa_manuscrito_10.jpg"
        },
        {
            id: 'lili_croquetas',
            title: "Croquetas",
            description: "Croquetas de atún o restos, con bechamel cremosa y nuez moscada.",
            ingredients: [
                "3 cucharadas colmadas de harina",
                "3/4 litro de leche",
                "Un trozo de cebolla picadita",
                "Nuez moscada, sal",
                "Atún o cualquier relleno (restos carne/gambas)",
                "Huevo y pan rallado"
            ],
            steps: [
                "Sofreír la cebolla. Añadir harina a fuego lento y cocinar.",
                "Añadir leche poco a poco sin dejar de mover hasta que espese y se desprenda de la pared.",
                "Añadir sal, nuez moscada y el relleno.",
                "Dejar enfriar, formar croquetas, pasar por huevo y pan rallado.",
                "Freír hasta dorar."
            ],
            image: "assets/croquetas_caseras.png",
            originalImage: "assets/wa_manuscrito_35.jpg",
            category: "Entrante",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_pudin_pescado',
            title: "Pudín de Pescado",
            description: "Pastel suave de pescado y huevo, servido frío con mayonesa.",
            ingredients: [
                "1/2 kg pescado limpio",
                "3 huevos",
                "Un migajón de pan mojado en leche",
                "Un chorreón de tomate frito",
                "Sal, pimienta",
                "Margarina (para molde) and Mahonesa (cobertura)"
            ],
            steps: [
                "Cocer el pescado (hervor mínimo) y escurrir.",
                "Batir pescado con huevos, pan, tomate, sal y pimienta (turmix).",
                "Verter en molde untado de margarina.",
                "Hornear a 180ºC baño maría o normal unos 25 min (hasta que aguja salga limpia).",
                "No pasar de cocción. Dejar enfriar.",
                "Cubrir con mahonesa y adornar."
            ],
            image: "assets/pudin_pescado.png",
            originalImage: "assets/wa_manuscrito_19.jpg",
            category: "Entrante",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_andrajos',
            title: "Andrajos de Alfonso",
            description: "Guiso tradicional de andrajos con marisco, verduras y hierbabuena.",
            ingredients: [
                "Paquete de Andrajos",
                "Tomate, pimiento, cebolla, coliflor (verduras variadas)",
                "Calamares, gambas y almejas",
                "Liebre o conejo (opcional, cocido aparte)",
                "Hierbabuena, sal, pimienta, guindilla y azafrán"
            ],
            steps: [
                "Hacer un sofrito 'a lo bestia' con todas las verduras y los calamares.",
                "Pelar gambas y cocer cáscaras para caldo. Cocer almejas y reservar caldo.",
                "Poner a hervir el sofrito con los caldos y añadir los andrajos (1 paquete para 4).",
                "Añadir bastante hierbabuena, 1-2 guindillas y condimentos.",
                "Al final añadir gambas, almejas peladas y el conejo si hay.",
                "Es como un arroz pero con pasta (andrajos)."
            ],
            image: "assets/andrajos_alfonso.png",
            originalImage: "assets/wa_manuscrito_10.jpg",
            category: "Guisos y Cuchara",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_empanada',
            title: "Empanada de Hojaldre",
            description: "Empanada rápida de hojaldre con atún o carne y huevo duro.",
            ingredients: [
                "2 planchas de hojaldre (La Cocinera o similar)",
                "Sofrito de tomate, pimiento y cebolla",
                "Atún (2 latas) o carne picada (sofrita previamente)",
                "2 huevos duros a cachitos",
                "1 huevo batido (para pintar)"
            ],
            steps: [
                "Extender una plancha sobre la placa de horno con papel.",
                "Echar el relleno (sofrito + atún/carne + huevo duro).",
                "Cubrir con la otra plancha y cerrar los bordes (hacer trencita).",
                "Pinchar con tenedor para respiraderos y pintar con huevo batido.",
                "Hornear a 180ºC hasta que esté dorada."
            ],
            image: "assets/empanada_hojaldre.png",
            originalImage: "assets/wa_manuscrito_11.jpg",
            category: "Entrante",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_gazpachuelo',
            title: 'Gazpachuelo "en blanco"',
            description: "Sopa caliente con mayonesa, pescado, gambas y patatas.",
            ingredients: [
                "1/2 kg pescado sin piel ni espinas",
                "Un puñado de gambas y almejas",
                "3 patatas a trocitos",
                "1 cebolla muy picada",
                "Mahonesa (con limón o vinagre)",
                "Sal y agua (3/4 litro)"
            ],
            steps: [
                "Hervir el agua con la cebolla picadita, patatas y sal.",
                "Cuando las patatas estén tiernas, añadir el pescado (solo un hervor).",
                "Añadir gambas crudas y almejas (o cocidas aparte y colar caldo).",
                "A la hora de comer, añadir la mahonesa con el guiso FUERA del fuego (para que no se corte)."
            ],
            image: "assets/gazpachuelo_lili.png",
            originalImage: "assets/wa_manuscrito_13.jpg",
            category: "Guisos y Cuchara",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_albondigas',
            title: "Albóndigas Caseras",
            description: "Albóndigas caseras de carne mixta con salsa de vino blanco y verduras.",
            ingredients: [
                "3/4 kg carne picada (mitad ternera, mitad cerdo)",
                "2 huevos",
                "Sal, pimienta, perejil, pan rallado",
                "Beicon o jamón picadito (opcional)",
                "Harina",
                "Tomate frito",
                "1 cebolla, 1 pimiento",
                "Aceite, Vino blanco, Laurel"
            ],
            steps: [
                "Hacer un sofrito con la cebolla, pimiento y tomate. Apartar y triturar si se quiere.",
                "Mezclar la carne con huevos, especias y pan rallado. Hacer bolas no muy apretadas.",
                "Pasar por harina y freír hasta que estén doradas.",
                "Poner en cacerola con el sofrito, chorreón de vino blanco, un poco de agua y laurel.",
                "Cocer un ratito a fuego lento."
            ],
            image: "assets/albondigas_caseras.png",
            originalImage: "assets/wa_manuscrito_2.jpg",
            category: "Carnes",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_lasana',
            title: "Lasaña de Carne",
            description: "Lasaña clásica con carne picada, tomate y gratinada con mucha bechamel.",
            ingredients: [
                "Placas de lasaña precocidas",
                "3/4 kg carne picada (cerdo y ternera)",
                "Ajo, perejil, sal, 1 cebolla",
                "1/2 litro de bechamel (o más)",
                "1/2 litro de tomate frito (o brik grande)",
                "Orégano y queso rallado"
            ],
            steps: [
                "Hidratar las placas en agua hasta que estén blancas y escurrir en paño.",
                "Sofreír la carne con la cebolla pochada, sal, ajo y perejil.",
                "Montar capas: lasaña, capa de carne (puede mezclarse con tomate).",
                "Cubrir todo con bechamel, queso y orégano.",
                "Gratinar en el horno."
            ],
            image: "assets/lasana_carne.png",
            originalImage: "assets/wa_manuscrito_3.jpg",
            category: "Arroces y Pastas",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_pavo_trufao',
            title: "Pavo Trufao",
            description: "Fiambre de pavo casero con ciruelas, huevo y un toque de coñac. Ideal para servir frío.",
            ingredients: [
                "1/2 pavo (no muy grande)",
                "1/4 kg carne picada",
                "Jamón picadito",
                "Perejil, nuez moscada, sal, pimienta, ajo",
                "Ciruelas sin hueso o pasas",
                "Un buen chorreón de Coñac",
                "5 o 6 huevos",
                "Cebolla, puerro, apio, zanahoria (para el caldo)",
                "Huevo hilado para adornar"
            ],
            steps: [
                "Cocer el pavo con las verduras (puerro, apio, zanahoria) y desmenuzar (guardar caldo).",
                "Sofreír la carne picada con cebolla pochada.",
                "Mezclar todo con los huevos, aliños, ciruelas y coñac.",
                "Hacer cilindros con papel transparente, apretando bien.",
                "Hornear a 180ºC durante 15 minutos para que cuaje el huevo.",
                "Dejar enfriar poniendo peso encima.",
                "Servir frío adornado con huevo hilado."
            ],
            image: "assets/pavo_trufao.png",
            originalImage: "assets/wa_manuscrito_4.jpg",
            category: "Carnes",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_paella_2026',
            title: "Paella de Alfonso",
            description: "La famosa paella para grandes reuniones, con pollo, cerdo, alcachofas y habicholillas.",
            ingredients: [
                "1 o 2 cabezas de ajos",
                "1 kg - 1,250 kg de carne de pollo troceada pequeña",
                "1 kg - 1,250 kg de carne de cerdo (estofado) troceada",
                "1 kg de habicholillas",
                "1 kg de alcachofas",
                "0,5 kg de pimiento verde",
                "0,5 kg de pimiento rojo",
                "3 kg de arroz (para 30 personas - marca SOS recomendado)",
                "Sal, pimienta, colorante alimentario",
                "9 o 10 litros de agua (mejor que caldo)",
                "Aceite",
                "4 o 5 limones"
            ],
            steps: [
                "Preparar las alcachofas limpiándolas (sacar 6 trozos de cada una) y ponerlas en agua con limón para que no se pongan negras.",
                "Tener la paellera nivelada y los ingredientes preparados (cortados).",
                "Sofreír las carnes y verduras.",
                "Añadir el arroz y rehogar.",
                "Añadir el agua (9-10 litros) y sazonar con sal, pimienta y colorante.",
                "Cocinar hasta que el arroz esté en su punto."
            ],
            image: "assets/paella_alfonso.png",
            originalImage: "assets/wa_manuscrito_1.jpg",
            category: "Arroces y Pastas",
            abuela: 'Lili',
            rotation: 0
        },
        {
            id: 'lili_canelones_foie',
            title: "Canelones de Foiegras",
            description: "Exquisitos canelones rellenos de foiegras y huevo, gratinados con bechamel.",
            ingredients: [
                "1 paquete de canelones precocidos",
                "1 lata grande de foiegras",
                "3 huevos duros",
                "1 tetra brik de tomate frito",
                "1/2 litro de bechamel",
                "Queso rallado",
                "Orégano"
            ],
            steps: [
                "Echar los canelones en agua con cuidado de que no se monten.",
                "Mezclar el foiegras con los huevos duros picaditos para el relleno.",
                "Cuando la pasta esté blanca, extender en un paño para secar.",
                "Rellenar con la mezcla y colocar en una fuente de horno.",
                "Cubrir con salsa de tomate frito y luego la bechamel.",
                "Espolvorear queso rallado y orégano.",
                "Gratinar en el horno antes de servir."
            ],
            image: "assets/canelones_foie.png",
            originalImage: "assets/wa_manuscrito_8.jpg",
            category: "Arroces y Pastas",
            abuela: 'Lili',
            rotation: 0
        },



        {
            id: '20260111_01',
            title: "Paella de Mari",
            abuela: "Mari",
            author: "Mari",
            category: "Arroces",
            description: "La auténtica paella de Mari con pollo, magro y marisco.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 Kg Pollo, 1/4 Kg Magro<br>
                - 2 o 3 Calamares pequeños, 5 o 6 Gambas, Almejas<br>
                - Sofrito: Cebolla, Ajo, Pimiento rojo, Tomate<br>
                - Arroz (1 puñado por persona)<br>
                - Pimentón, Sal, Pimienta molida, Azafrán<br><br>
                <strong>Preparación:</strong><br>
                1. Lavar y cocer las almejas. Apartar. Freír el pollo y el magro y apartar.<br>
                2. Hacer un sofrito con cebolla, ajo, pimiento rojo y tomate. Cuando esté listo, añadir los calamares limpios y troceados.<br>
                3. Añadir pimentón (una vuelta rápida para que no amargue).<br>
                4. Poner la carne y el sofrito en la paella. Añadir el agua de las almejas y el agua necesaria.<br>
                5. Sazonar con sal, pimienta y azafrán. Cuando hierva unos 20 min, añadir el arroz.<br>
                6. Dejar hervir 15 o 20 min (los últimos 5 al horno si es posible).
            `,
            image: "assets/paella_mari.png",
            originalImage: "assets/mari_paella_manuscript.jpg"
        },
        {
            id: '20260111_02',
            title: "Ternera al Oporto",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes",
            description: "Redondo de ternera guisado con vino de Oporto y verduras.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Kg Ternera (Redondo o Llana)<br>
                - 2 Cebollas, 1 Zanahoria, 1 Cabeza de ajos<br>
                - 1 Vaso Vino Oporto, Aceite de oliva<br>
                - 1 Hoja de Laurel, 15-20 granos Pimienta, 4 Clavos, Azafrán<br><br>
                <strong>Preparación:</strong><br>
                1. En olla exprés, pochar las cebollas y zanahorias troceadas. Añadir la cabeza de ajos y la carne atada.<br>
                2. Marear durante unos minutos. Añadir el resto de ingredientes, el vino y un vaso de agua.<br>
                3. Sazonar, tapar y hervir durante 1 hora.<br>
                4. Cuando la carne esté tierna, retirar ajos y laurel, y triturar la salsa.
            `,
            image: "assets/ternera_oporto.png",
            originalImage: "assets/mari_ternera_oporto_manuscript.jpg"
        },

        {
            id: '20260111_04',
            title: "Lentejas",
            abuela: "Mari",
            author: "Mari",
            category: "Cuchara",
            description: "Guiso de lentejas estofadas con chorizo y morcilla.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Lentejas (escurridas)<br>
                - 1/2 Cebolla, Pimiento verde, 1 Tomate entero<br>
                - Morcilla, Chorizo, 1 Cabeza de ajo<br>
                - 1 Patata pelada, Zanahorias (opcional)<br>
                - Sal, Cominos (limpios de palitos)<br><br>
                <strong>Preparación:</strong><br>
                1. Poner todos los ingredientes en crudo en la olla exprés.<br>
                2. Cubrir con agua y cerrar.<br>
                3. Poner a fuego fuerte. Cuando suba la válvula, bajar a fuego medio (6) y cocinar hasta que estén tiernas.
            `,
            image: "assets/lentejas_mari.png",
            originalImage: "assets/mari_lentejas_manuscript.jpg"
        },
        {
            id: '20260111_05',
            title: "Albóndigas en Salsa de Almendras",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes",
            description: "Albóndigas caseras en una rica salsa de almendras.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Kg Carne picada (750g ternera, 250g cerdo)<br>
                - Ajos, Perejil, Pan duro, Huevos, Azafrán<br>
                - Salsa: 2 Ajos, 1 rebanada Pan, 8-10 Almendras, Cebolla<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar la carne con ajos y perejil picados, pan triturado, 2 huevos, sal, pimienta y azafrán.<br>
                2. Formar albóndigas, enharinar y freír. Reservar.<br>
                3. Para la salsa: Freír 2 ajos, el pan y las almendras. Aparte sofreír cebolla.<br>
                4. Triturar todo junto. Echar sobre las albóndigas, cubrir de agua y hervir 20 min.
            `,
            image: "assets/albondigas_almendras_mari.png",
            originalImage: "assets/mari_albondigas_almendras_manuscript.jpg"
        },
        {
            id: '1',
            title: "Pastel de Cierva",
            abuela: "Mari",
            author: "Mari",
            category: "Postres",
            description: "Un clásico pastel murciano con masa quebrada dulce y relleno salado de pollo y huevo duro. Un contraste de sabores único.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Para la masa: 250g manteca, 250g azúcar, 1 huevo, ralladura de limón, harina (la que admita).<br>
                - Para el relleno: Pechuga de pollo cocida, huevos duros, caldo de ave.<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar la manteca con el azúcar y el huevo. Añadir la ralladura y la harina poco a poco hasta obtener una masa homogénea.<br>
                2. Estirar la mitad de la masa para la base. Colocar el relleno de pollo desmenuzado y rodajas de huevo duro.<br>
                3. Cubrir con la otra mitad de la masa y hornear hasta que esté dorada.
            `,
            image: "assets/pastel_cierva.png"
        },
        {
            id: '20251204_184250',
            title: "Coca de Verduras",
            author: "Receta de la Abuela",
            category: "Salados",
            description: "Masa crujiente cubierta de verduras asadas. Sencilla y deliciosa.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 Kg de harina<br>
                - 1/4 vaso de aceite<br>
                - 1/4 vaso de agua<br>
                - 1 sobre de Levadura Royal<br>
                - Relleno: Cebolla, Tomate, Pimentón y Sal<br><br>
                <strong>Preparación:</strong><br>
                1. Amasar muy bien todos los ingredientes de la masa.<br>
                2. Extender sobre una fuente de horno.<br>
                3. Colocar las verduras (cebolla, tomate) troceadas por encima.<br>
                4. Espolvorear con pimentón y sal.<br>
                5. Hornear y gratinar 5 minutos al final.
            `,
            image: "assets/coca_verduras.png"
        },
        {
            id: '20251204_184304',
            title: "Sopas Mallorquinas",
            author: "Receta de la Abuela",
            category: "Cuchara",
            description: "Guiso tradicional con pan moreno y verduras de temporada.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 Acelgas, 1/2 Repollo<br>
                - 4 Tomates sin piel<br>
                - 1/4 Pan moreno (rebanadas finas y secas)<br>
                - Majado: 3 dientes de ajos, perejil y aceite<br><br>
                <strong>Preparación:</strong><br>
                1. Preparar un sofrito con las verduras y el majado.<br>
                2. Añadir caldo de cocer las acelgas.<br>
                3. Colocar en cazuela de barro alternando capas de pan y caldo/verduras.<br>
                4. Hornear durante 1/2 hora.
            `,
            image: "assets/sopas_mallorquinas.png"
        },
        {
            id: '20251204_184313',
            title: "Pollo en Pepitoria",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Pollo guisado en salsa de almendras y azafrán. Un clásico.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Pollo troceado<br>
                - Ajos, perejil, 1 clavo<br>
                - Pimienta en grano, canela en rama<br>
                - Rodaja de limón, vino blanco<br>
                - Azafrán, aceite y sal<br><br>
                <strong>Preparación:</strong><br>
                1. Dorar el pollo y reservar en la olla.<br>
                2. Hacer un majado con ajos, perejil y especias.<br>
                3. Añadir a la olla junto con el vino, el limón, canela y un chorrito de aceite.<br>
                4. Cubrir con agua (1 vaso aprox) y cocer a fuego lento hasta que esté tierno.
            `,
            image: "assets/pollo_pepitoria.png"
        },
        {
            id: '20251204_184318',
            title: "Filetes en Salsa",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Filetes empanados y cocinados en una rica salsa de verduras.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Filetes de ternera<br>
                - Cebolla, Ajos, 1 Tomate asado<br>
                - Vino blanco, Perejil<br>
                - Pimienta, 1 Clavo, Sal<br><br>
                <strong>Preparación:</strong><br>
                1. Enharinar y freír los filetes. Reservar.<br>
                2. Hacer un sofrito con cebolla, ajos y el tomate asado.<br>
                3. Poner en cazuela los filetes, el sofrito, vino blanco y un vaso de agua.<br>
                4. Añadir las especias (pimienta, clavo, perejil, sal) y dejar hervir unos minutos.
            `,
            image: "assets/filetes_salsa.png"
        },
        {
            id: '20251204_184325',
            title: "Pollo en Salsa",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Guiso de pollo con sofrito casero y vino blanco.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Pollo troceado<br>
                - 2 Ajos, Cebolla<br>
                - 1 Tomate asado, Perejil<br>
                - Pimienta en grano, Vino blanco<br><br>
                <strong>Preparación:</strong><br>
                1. Dorar el pollo troceado.<br>
                2. Freír aparte los ajos, cebolla y el tomate asado.<br>
                3. Juntarlo todo en la olla con el perejil, pimienta, sal, vino y un poco de agua.<br>
                4. Dejar hervir unos 20 minutos.
            `,
            image: "assets/pollo_salsa.png"
        },

        {
            id: '20251204_184339',
            title: "Coca de Requesón",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Postre tradicional al horno con requesón, huevos y azúcar.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg Requesón<br>
                - 8 Huevos<br>
                - 16 cucharadas Azúcar<br>
                - 1/4 L Leche<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar todos los ingredientes en un bol.<br>
                2. Verter en un molde y hornear hasta que cuaje y dore.
            `,
            image: "assets/coca_requeson.png"
        },
        {
            id: '20251204_184342',
            title: "Arroz con Almejas",
            author: "Receta de la Abuela",
            category: "Arroces",
            description: "También conocido como Arroz Verde, con patatas y salsa de perejil.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Almejas, Arroz<br>
                - Patatitas a cuadritos<br>
                - Ajo, Perejil, Laurel, Azafrán<br>
                - Pimienta, Comino, Limón<br><br>
                <strong>Preparación:</strong><br>
                1. Pochar cebolla y abrir las almejas. Apartar.<br>
                2. Machacar ajo, perejil y especias.<br>
                3. Juntar todo en la olla con las patatas y agua/caldo.<br>
                4. Hervir con laurel. Añadir el arroz y terminar con limón.
            `,
            image: "assets/arroz_almejas.png"
        },
        {
            id: '20251204_184351',
            title: "Pollo al Curry",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Receta exótica adaptada con manzana y cebolla.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Pollo<br>
                - 2 Manzanas, 2 Cebollas<br>
                - Curry, Sal, Agua<br><br>
                <strong>Preparación:</strong><br>
                1. Marear (dorar) el pollo y apartar.<br>
                2. Sofreír cebollas y manzanas troceadas.<br>
                3. Agregar al pollo junto con el curry y la sal.<br>
                4. Cubrir de agua y cocer. Servir con arroz blanco.
            `,
            image: "assets/pollo_curry.png"
        },
        {
            id: '20251204_184354',
            title: "Jibia con Fideos",
            author: "Receta de la Abuela",
            category: "Pescados",
            description: "Guiso marinero de sepia y gambas con fideos.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 Kg Jibias (Sepia), 1/2 Kg Gambas<br>
                - Fideos de cazuela<br>
                - Cebolla, Pimiento rojo, Tomate frito<br>
                - Patata, Azafrán, Cominos<br><br>
                <strong>Preparación:</strong><br>
                1. Sofreír cebolla y pimiento. Añadir la jibia y dorar.<br>
                2. Añadir tomate, patata a cuadros y especias.<br>
                3. Cubrir de agua y hervir.<br>
                4. Añadir los fideos y las gambas al final.
            `,
            image: "assets/jibia_fideos.png"
        },
        {
            id: '20251204_184404',
            title: "Albóndigas de Bacalao",
            author: "Receta de la Abuela",
            category: "Pescados",
            description: "Deliciosas albóndigas en salsa de almendra y azafrán.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Bacalao, Pan duro<br>
                - Ajo, Perejil, Huevos<br>
                - Salsa: Cebolla, Pimentón, Cominos<br><br>
                <strong>Preparación:</strong><br>
                1. Hervir y desmigar el bacalao. Mezclar con pan remojado, ajo, perejil y huevos.<br>
                2. Formar albóndigas y freír.<br>
                3. Hacer salsa con cebolla, pimentón y cominos.<br>
                4. Cocer las albóndigas en la salsa.
            `,
            image: "assets/albondigas_bacalao.png"
        },
        {
            id: '20251204_184411',
            title: "Tarta de Hojaldre (Puerros)",
            author: "Receta de la Abuela",
            category: "Salados",
            description: "Pastel salado de puerros y gambas con nata.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Puerros, Gambas<br>
                - 3 Huevos, 1 brick Nata<br>
                - Lámina de Hojaldre<br>
                - Sal, Pimienta<br><br>
                <strong>Preparación:</strong><br>
                1. Cocer los puerros en aros y escurrir.<br>
                2. Batir huevos con la nata. Añadir los puerros, gambas y salpimentar.<br>
                3. Forrar un molde con el hojaldre.<br>
                4. Rellenar y hornear (calor arriba y abajo) hasta que cuaje.
            `,
            image: "assets/tarta_puerros.png"
        },
        {
            id: '20251204_184414',
            title: "Tarta Hojaldre Bacon",
            author: "Receta de la Abuela",
            category: "Salados",
            description: "Tipo Quiche con bacon, queso emmental y nata.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Masa de Hojaldre<br>
                - Bacon ahumado, Queso Emmental<br>
                - 1 Cebolla, 4 Huevos<br>
                - 200gr Nata, Leche<br><br>
                <strong>Preparación:</strong><br>
                1. Dorar la cebolla picadita y extender sobre la masa.<br>
                2. Espolvorear queso y el bacon dorado.<br>
                3. Batir huevos, nata, un poco de leche, sal y pimienta.<br>
                4. Verter sobre la masa y hornear.
            `,
            image: "assets/tarta_bacon.png"
        },
        {
            id: '20251204_184419',
            title: "Fideos Fritos",
            author: "Receta de la Abuela",
            category: "Pescados",
            description: "Fideos tostados cocinados en caldo de pescado.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg Fideos<br>
                - 1/2 kg Tomate<br>
                - Caldo de Pescado<br>
                - Aceite, Azafrán<br><br>
                <strong>Preparación:</strong><br>
                1. Preparar un caldo de pescado casero.<br>
                2. Freír el tomate. Cuando esté listo, añadir los fideos y freírlos hasta estar bien 'torraditos'.<br>
                3. Añadir el caldo poco a poco hasta que estén tiernos.<br>
                4. Dejar secar (secos de huevo).
            `,
            image: "assets/fideos_fritos.png"
        },
        {
            id: '20251204_184430',
            title: "Ensalada de Arroz / Zanahorias",
            author: "Receta de la Abuela",
            category: "Entrantes",
            description: "Dos recetas frescas: Ensalada de arroz con pollo al curry y Zanahorias aliñadas.",
            fullRecipe: `
                <strong>Ensalada de Arroz:</strong><br>
                - Arroz hervido, Pollo asado desmenuzado<br>
                - Salsa: 1 Yogurt, Curry, Pimienta, 2 cdas Mahonesa<br>
                - Naranja picada, Plátano y Pasas.<br>
                <em>Mezclar todo bien y servir frío.</em><br><br>
                <strong>Zanahorias Barbacoas:</strong><br>
                - Zanahorias hervidas en rodajas<br>
                - Refrito: Ajos fritos, Pimentón, Cominos, Vinagre<br>
                <em>Echar el refrito sobre las zanahorias.</em>
            `,
            image: "assets/ensalada_arroz.png"
        },
        {
            id: '20251204_184446',
            title: "Pechuga a la Naranja",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Filetes de pollo flambeados con una salsa cremosa de naranja.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Pechuga de pollo fileteada<br>
                - Mantequilla, Aceite<br>
                - Coñac o Whisky<br>
                - Zumo de Naranja, Nata<br><br>
                <strong>Preparación:</strong><br>
                1. Salpimentar y dorar los filetes en mantequilla/aceite.<br>
                2. Flambear con el licor.<br>
                3. Añadir zumo de naranja y hervir 4-5 min.<br>
                4. Añadir la nata al final y rectificar de sal.
            `,
            image: "assets/pollo_naranja.png"
        },
        {
            id: '20251204_184450',
            title: "Pechuga con Cebolla y Nata",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Pechugas de pollo en salsa cremosa de cebolla.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Filetes de pollo<br>
                - Cebolla<br>
                - 1 bote de Nata<br>
                - 1 pastilla Avecrem, Sal, Pimienta<br><br>
                <strong>Preparación:</strong><br>
                1. Dorar la cebolla cortada en aros finos.<br>
                2. Añadir los filetes y cocinar.<br>
                3. Añadir la pastilla de caldo y la nata.<br>
                4. Probar de sal y pimienta y dejar espesar.
            `,
            image: "assets/pechuga_crema.png"
        },
        {
            id: '20251204_184504',
            title: "Flan de Huevo",
            author: "Receta de la Abuela",
            abuela: "Lili",
            category: "Postres",
            description: "El clásico flan de huevo casero.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 6 Huevos<br>
                - 3 vasos de Leche<br>
                - Azúcar (2 cucharadas por vaso + 2 de regalo)<br><br>
                <strong>Preparación:</strong><br>
                1. Batir los huevos con los vasos de leche y el azúcar.<br>
                2. Preparar caramelo en el molde.<br>
                3. Verter la mezcla y hornear al baño maría hasta que cuaje.
            `,
            image: "assets/flan_lili.png"
        },
        {
            id: '20251204_184508',
            title: "Cordero Guisado",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Guiso tradicional de cordero con majado y vino de Málaga.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Pierna de cordero troceada<br>
                - 2 Cebollas grandes<br>
                - Majado: Ajos, perejil, pimienta, pimentón, sal, laurel<br>
                - Vino Málaga<br><br>
                <strong>Preparación:</strong><br>
                1. Marear el cordero con las cebollas partidas en cascos.<br>
                2. Añadir el majado y el vino.<br>
                3. Cubrir de agua y cocer en olla exprés o normal lentamente hasta que esté tierno.
            `,
            image: "assets/cordero_guisado.png"
        },
        {
            id: '20251204_184516',
            title: "Sopas Mallorquinas (II)",
            author: "Receta de la Abuela",
            category: "Cuchara",
            description: "Variante detallada con espinacas, col y alcachofas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Sofrito: Cebolla, cebolleta, tomate<br>
                - Verduras: Espinacas, Col, Pimiento rojo, Alcachofas, Acelgas<br>
                - Avecrem, Agua<br><br>
                <strong>Preparación:</strong><br>
                1. Hacer el sofrito con la cebolla y tomate.<br>
                2. Agregar todas las verduras muy picaditas y sofreír.<br>
                3. Cuando estén pochaditas, agregar agua y avecrem.<br>
                4. (Servir sobre rebanadas de pan finas).
            `,
            image: "assets/sopas_mallorquinas.png"
        },
        {
            id: '20251204_184521',
            title: "Migas",
            author: "Receta de la Abuela",
            category: "Varios",
            description: "Migas completas con chorizo, pimientos y panceta.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg Pan cateto<br>
                - 4 Chorizos, 4 Pimientos choriceros<br>
                - 1/2 kg Panceta<br>
                - 5 cabezas de Ajos<br><br>
                <strong>Preparación:</strong><br>
                1. Freír primero los ajos y apartar.<br>
                2. Freír los chorizos, luego los pimientos.<br>
                3. Por último la panceta bien frita.<br>
                4. (Añadir el pan humedecido y remover hasta que estén sueltas y doradas).
            `,
            image: "assets/migas.png"
        },
        {
            id: '20251204_184532',
            title: "Redondo a la Mostaza",
            author: "Receta de la Abuela",
            category: "Carnes",
            description: "Redondo de ternera mechado con mostaza y verduras al horno.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Redondo de ternera<br>
                - Tocino (para mechar)<br>
                - Verduras: Cebolla, ajos, pimientos verdes, zanahorias<br>
                - Mostaza Louit (con granos), Copa de Brandy, Vino blanco<br>
                - Puré de patatas, Manzana salteada<br><br>
                <strong>Preparación:</strong><br>
                1. Mechar el redondo con tocino, salpimentar y dorar en la sartén.<br>
                2. Rehogar todas las verduras.<br>
                3. Añadir al redondo mostaza, brandy (flambear) y vino blanco.<br>
                4. Hornear con las verduras y 1 vaso de agua a 200º durante 20 min.<br>
                5. Servir con puré y manzana.
            `,
            image: "assets/redondo_mostaza.png"
        },
        {
            id: '20251204_184536',
            title: "Arroz Negro",
            author: "Receta de la Abuela",
            category: "Arroces",
            description: "Arroz negro tradicional cocinado con sepia y tomate natural.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg Arroz<br>
                - 1 kg Sepia (o Jibia)<br>
                - Bote 800gr Tomate triturado natural<br>
                - Caldo de pescado, 1 Avecrem<br>
                - Tinta de calamar (si la sepia no trae suficiente)<br><br>
                <strong>Preparación:</strong><br>
                1. Sofreír la sepia a trocitos. Cuando esté dorada, añadir el tomate y avecrem.<br>
                2. Cuando el sofrito esté listo, añadir el arroz y tostarlo bien.<br>
                3. Añadir el caldo de pescado caliente (con la tinta disuelta).<br>
                4. Cocinar hasta que esté en su punto.
            `,
            image: "assets/arroz_negro.png"
        },
        {
            id: '20251204_184543',
            title: "Rodaballo al Horno",
            author: "Receta de la Abuela",
            category: "Pescados",
            description: "Rodaballo asado con almejas, mejillones y patatas panadera.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg Rodaballo<br>
                - 12 Almejas, 12 Mejillones<br>
                - 4 Patatas, 1 Tomate<br>
                - Sofrito: 4 Ajos, Pimiento rojo y verde, 4 Zanahorias<br>
                - Copa de Coñac, Vasito Albariño, Caldo pescado<br><br>
                <strong>Preparación:</strong><br>
                1. Dorar los ajos, pimientos y zanahorias (juliana) y tomate. Añadir coñac (flambear), vino y caldo.<br>
                2. Freír patatas en rodajas gorditas.<br>
                3. Pasar el rodaballo por la plancha vuelta y vuelta.<br>
                4. En cazuela: patatas, rodaballo, sofrito, almejas y mejillones. Hornear 10 min.
            `,
            image: "assets/rodaballo_horno.png"
        },

        {
            id: '20251204_184744',
            title: "Pestiños",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Dulce tradicional de masa frita con matalahúva y almíbar.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 tazón de Aceite, 1 tazón de Vino<br>
                - Zumo de 1 Naranja, 1 vasito Aguardiente<br>
                - 1/2 cdita Bicarbonato, Matalahúva (anís en grano), 1 Clavo<br>
                - Harina (la que admita)<br><br>
                <strong>Preparación:</strong><br>
                1. Freír el aceite con la matalahúva y el clavo. Dejar enfriar.<br>
                2. Mezclar el aceite colado con el vino, zumo, aguardiente y bicarbonato.<br>
                3. Ir añadiendo harina y amasando hasta que la masa esté dura y se despegue.<br>
                4. Estirar muy fino, formar pestiños y freír.<br>
                5. Emborrizar en azúcar y canela, o bañar en almíbar de miel.
            `,
            image: "assets/pestinos_miel.png"
        },
        {
            id: '20251204_184757',
            title: "Rosquitos de Vino y Manteca",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Rosquitos tradicionales hechos con manteca, vino y azúcar.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 kg de Manteca<br>
                - 1/2 kg de Azúcar<br>
                - 1 litro de Vino<br>
                - Harina (la que admita)<br>
                - Raspadura de 2 Limones, Canela al gusto<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar la manteca, el vino y el azúcar.<br>
                2. Añadir la raspadura y canela.<br>
                3. Ir añadiendo harina hasta formar una masa que no se pegue.<br>
                4. Formar roscos grandes y cocer al horno.<br>
                5. Emborrizar en azúcar y canela.
            `,
            image: "assets/rosquitos_vino.png"
        },
        // ... (rest of the recipes remain the same, ensuring correct structure)
        {
            id: '20251204_184802',
            title: "Ochios",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Dulce típico con pimentón dulce y matalahúva.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 kg de Harina<br>
                - 1/2 litro de Aceite (aprox)<br>
                - Ajonjolí y Canela al gusto<br>
                - Matalahúva (anís en grano)<br>
                - 4 Huevos<br>
                - 1 copa de Aguardiente, 1 cda de Pimentón dulce<br><br>
                <strong>Preparación:</strong><br>
                1. Hacer un volcán con la harina y añadir el resto de ingredientes.<br>
                2. Amasar bien todo junto.<br>
                3. Dar forma de ochios (formando un ocho o lazo).<br>
                4. METER en el horno hasta que estén dorados.
            `,
            image: "assets/ochios_tradicionales.png"
        },
        {
            id: '20251204_184814',
            title: "Magdalenas de Pueblo",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "La receta clásica de magdalenas con aceite, leche y limón.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 litro de Leche<br>
                - 1/2 litro de Aceite<br>
                - 1 kg de Azúcar<br>
                - 1 kg de Harina<br>
                - Raspadura de limón, Ajonjolí y Canela<br>
                - 1 sobre de levadura o gaseosillas<br><br>
                <strong>Preparación:</strong><br>
                1. Batir bien los líquidos con el azúcar.<br>
                2. Añadir la harina tamizada y las especias/levadura.<br>
                3. Llenar los moldes y hornear hasta que suban y doren.
            `,
            image: "assets/magdalenas_caseras.png"
        },
        {
            id: '20251204_184825',
            title: "Bizcocho de Almendra",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Bizcocho suave con trocitos de almendra.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 2 Huevos<br>
                - 60 gr de Azúcar<br>
                - 165 gr de Almendras molidas<br>
                - 125 gr de Harina<br>
                - 70 gr de Mantequilla<br><br>
                <strong>Preparación:</strong><br>
                1. Batir los huevos e ir añadiendo poco a poco el azúcar.<br>
                2. Incorporar las almendras, la harina y la mantequilla derretida.<br>
                3. Verter en un molde untado y espolvorear trozos de almendra por encima.<br>
                4. Cocer al horno suave (tamizar la harina antes para que quede esponjoso).
            `,
            image: "assets/bizcocho_almendra.png"
        },
        {
            id: '20251204_184837',
            title: "Merengues al Cacao",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Merengues ligeros con un toque de chocolate.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 4 Claras de huevo<br>
                - Unas gotas de limón<br>
                - Jarabe hecho con 150gr de Azúcar y 1dl de Agua<br>
                - 25-35 gr de Cacao en polvo<br><br>
                <strong>Preparación:</strong><br>
                1. Batir las claras en un perol de cobre o bol, añadiendo el limón, hasta punto de nieve fuerte.<br>
                2. Añadir el jarabe (hilo) sobre el merengue sin dejar de batir hasta que enfríe.<br>
                3. Mezclar despacio el cacao.<br>
                4. Formar con manga pastelera sobre papel y secar en horno muy suave (85º-90º) durante unos minutos.
            `,
            image: "assets/merengues_cacao.png"
        },
        {
            id: '20251204_184845_1',
            title: "Roscos (Receta Antigua)",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Receta tradicional de roscos fritos.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Por cada huevo: 3 cdas Leche, 2 cdas Aceite, 2 cdas Azúcar<br>
                - Harina la que admita<br>
                - 1 cdita Bicarbonato<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar todos los líquidos y el azúcar.<br>
                2. Añadir harina con el bicarbonato hasta hacer una masa.<br>
                3. Formar los roscos y freír en aceite caliente.
            `,
            image: "assets/roscos_fritos.png",
            originalImage: "assets/20251204_184845.jpg",
            rotation: 90
        },
        {
            id: '20251204_184845_2',
            title: "Magdalenas (Gran Cantidad)",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Receta para una gran hornada de magdalenas tradicionales.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 4 docenas de Huevos<br>
                - 6 panillas de Aceite (aprox)<br>
                - Un cuartillo de Azúcar<br>
                - 3 libras de Harina<br>
                - Raspadura de 2 limones<br><br>
                <strong>Preparación:</strong><br>
                1. Batir muy bien los huevos y mezclar con el resto de ingredientes para llenar los moldes y hornear.
            `,
            image: "assets/magdalenas_pueblo.png"
        },
        {
            id: '20251204_184921_1',
            title: "Empanadillas",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Masa crujiente para empanadillas rellenas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 taza Aceite, 1 taza Zumo Naranja<br>
                - 1 taza Vino corriente<br>
                - Harina la que admita, Un poquito de Bicarbonato<br>
                - Relleno: Mermelada, Cabello de ángel, etc.<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar los líquidos. Añadir harina y bicarbonato hasta que la masa se corte.<br>
                2. Se pone en el mazo, se dobla, se unta dos picos y se fríe.<br>
                3. Luego se emborrizan con azúcar y canela.
            `,
            image: "assets/empanadillas_dulces.png"
        },
        {
            id: '20251204_184921_2',
            title: "Panqueques a la Crema",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Crepes rellenos de crema pastelera.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 200gr Harina, 2 cdas Azúcar<br>
                - 4 Huevos, 3 Yemas más<br>
                - 1 taza Leche fría, 1 cdita Canela<br>
                - 1 cda Manteca derretida<br><br>
                <strong>Preparación:</strong><br>
                1. Batir todo hasta formar una pasta espesita (añadir agua si está muy densa).<br>
                2. Untar sartén con manteca y hacer los panqueques.<br>
                3. Disponer sobre ellos una cucharada de pasta preparada (crema), doblar, y servir calientes.
            `,
            image: "assets/panqueques_crema.png"
        },
        {
            id: '20251204_184926_1',
            title: "Bollos de Leche",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Bollitos tiernos ideales para el desayuno.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Levadura (tamaño pelota)<br>
                - 1/2 litro Leche<br>
                - Harina la que admita<br>
                - 1 Huevo (para pintar), Azúcar<br><br>
                <strong>Preparación:</strong><br>
                1. Amasar bien la noche antes. Se amasa con los puños.<br>
                2. Cuando sube se vuelve a amasar otra vez y cuando vuelva a subir, se parten en bollitos.<br>
                3. Se rajan por medio, se le echa clara de huevo y en la rajita una poquita de azúcar.
            `,
            image: "assets/bollos_leche.png"
        },
        {
            id: '20251204_184926_2',
            title: "Albondiguillas de Patatas",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Dulce frito de patata y almendra.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Patatas cocidas y machacadas<br>
                - 1 Yema de huevo<br>
                - Proporción: Por cada libra de patatas, 4 onzas de azúcar<br>
                - Canela<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar el puré de patatas con la yema, azúcar y canela.<br>
                2. Hacer las albondiguillas.<br>
                3. Freír en aceite hirviendo y servirlas con azúcar y canela.
            `,
            image: "assets/albondiguillas_dulces_patata.png"
        },
        {
            id: '20251204_184941_1',
            title: "Galletas de Patatas",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Galletas antiguas hechas con base de patata.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 cuartillo de Patatas cocidas con sal<br>
                - 50gr Azúcar, 100gr Aceite<br>
                - 2 Huevos enteros (bien tapados que el agua no los cubra más que la mitad)<br>
                - Harina, Raspadura de limón, Canela<br><br>
                <strong>Preparación:</strong><br>
                1. Machacar las patatas estando tiernas.<br>
                2. Batir las yemas con el azúcar, un poco de canela y raspadura.<br>
                3. Batir las claras a punto de nieve y mezclar con las patatas.<br>
                4. Freír cucharadas en aceite muy caliente o hornear.
            `,
            image: "assets/galletas_patata.png"
        },
        {
            id: '20251204_184941_2',
            title: "Bollos de Manteca",
            author: "Receta de la Abuela",
            category: "Postres",
            description: "Bollos de pan enriquecidos con manteca.",
            fullRecipe: `
                <strong>Regla:</strong><br>
                - A 3 kg de Pan, 1 kg de Manteca.<br><br>
                <strong>Preparación:</strong><br>
                1. Se pone en un lebrillo la masa de pan y se va metiendo la manteca (cuidando que no calentar la manteca demasiado).<br>
                2. Se trabaja bien y se amasa.
            `,
            image: "assets/bollos_manteca.png"
        },
        {
            id: '20251204_184944',
            title: "Roscón de Reyes",
            abuela: "Mari",
            author: "Mari",
            category: "Postres",
            description: "El tradicional Roscón de Reyes casero.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 600 grs Harina, 75 grs Mantequilla<br>
                - 20-30 grs Levadura, 3 cdas Azúcar<br>
                - 1 vaso de Leche, 2 cdas Agua de Azahar<br>
                - 2 Huevos, Raspadura de limón y naranja<br>
                - Fruta escarchada, Azúcar y Canela para decorar<br><br>
                <strong>Preparación:</strong><br>
                1. Con una cuarta parte de la harina hacer masa con la levadura y la leche (bola). Dejar fermentar en sitio templado hasta que doble.<br>
                2. Con el resto de harina hacer un volcán, añadir huevos, azúcar, agua de azahar, ralladuras, etc. Amasar bien.<br>
                3. Incorporar la bola fermentada y amasar hasta obtener una masa fina. Dejar reposar 30 min.<br>
                4. Dar forma de rosco, pincelar con huevo, decorar y dejar subir de nuevo.<br>
                5. Hornear unos 15 min. y espolvorear azúcar al salir.
            `,
            image: "assets/roscon_reyes.png"
        },
        {
            id: '20251204_184953_1',
            title: "Galletas Caseras",
            abuela: "Mari",
            author: "Mari",
            category: "Postres",
            description: "Galletas de desayuno con vainilla.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 2 Huevos, 1/4 kg Harina blanquilla<br>
                - 3/4 kg Azúcar, 1/4 litro Aceite<br>
                - 1/2 litro Leche, 1 tubo Vainilla<br>
                - 1 cda Amoniaco en polvo (bicarbonato amónico)<br>
                - 1 cdita Bicarbonato, Raspadura de 2 limones<br><br>
                <strong>Preparación:</strong><br>
                Mezclar todos los ingredientes hasta obtener una masa homogénea. Dar forma y hornear. (Nota: La receta menciona amoniaco, usado antiguamente como impulsor, se puede sustituir por levadura química).
            `,
            image: "assets/galletas_caseras.png"
        },
        {
            id: '20251204_184953_2',
            title: "Alubias Estofadas",
            abuela: "Mari",
            author: "Mari",
            category: "Guisos",
            description: "Guiso contundente de alubias con carne de caza.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Alubias<br>
                - Pichones, pajarillos, asadura, carne de cabeza<br>
                - Aliños: Canela, pimienta, nuez moscada, sal<br>
                - Vino blanco<br><br>
                <strong>Preparación:</strong><br>
                1. Poner todo en agua fría a hervir durante 10 o 15 minutos (las carnes).<br>
                2. En una cacerola poner el pollo/carne en crudo, una cucharada de manteca, sal, un chorro pimiento de corneta (choco), pimienta en grano, azafrán, una cabeza de ajos y vino.
            `,
            image: "assets/alubias_estofadas.png"
        },
        {
            id: '20251204_184957_1',
            title: "Morcilla Extremeña",
            abuela: "Mari",
            author: "Mari",
            category: "Embutidos",
            description: "Receta tradicional de morcilla casera.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - La carne una vez picada (de la matanza)<br>
                - Ajos machacados, Pimienta, Poca sangre<br>
                - Una poca calabaza cocida y escurrida, Sal<br><br>
                <strong>Preparación:</strong><br>
                Mezclar la carne picada con los ajos, pimienta, sangre, calabaza y sal al paladar. Embutir y curar.
            `,
            image: "assets/morcilla_extremena.png"
        },
        {
            id: '20251204_184957_2',
            title: "Chorizo Extremeño",
            abuela: "Mari",
            author: "Mari",
            category: "Embutidos",
            description: "El auténtico sabor del chorizo casero.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Carne picada<br>
                - Pimentón, Vino blanco<br>
                - Un puntito de ajos y Sal<br><br>
                <strong>Preparación:</strong><br>
                Se le echa a la carne picada bastante pimentón, vino blanco, ajos y sal al gusto. Amasar y embutir.
            `,
            image: "assets/chorizo_extremeno.png"
        },
        {
            id: '20251204_185006_1',
            title: "Riñones al Jerez",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes",
            description: "Riñones al estilo clásico con salsa de tomate y Jerez.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Riñones<br>
                - Aceite, 1/2 dl Vino de Jerez<br>
                - 2 cdas Salsa de Tomate<br>
                - Sal, pimienta<br><br>
                <strong>Preparación:</strong><br>
                1. Limpiar los riñones. Ponerlos en una sartén con aceite caliente, saltear unos 5 min.<br>
                2. En una cacerola cocer los riñones con el vino de jerez hasta que reduzca un poco.<br>
                3. Añadir salsa de tomate, sazonar con sal y pimienta y dejar cocer unos 5 min más. Servir con huevos.
            `,
            image: "assets/rinones_jerez.png"
        },
        {
            id: '20251204_185006_2',
            title: "Salchichas Caseras",
            abuela: "Mari",
            author: "Mari",
            category: "Embutidos",
            description: "Embutido casero con especias.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Riñones, pajarillas, asadura negra, carne de carrillada y cabeza<br>
                - Aliños: Canela, pimienta molida, vino blanco, nuez moscada, sal<br><br>
                <strong>Preparación:</strong><br>
                1. Poner la carne en agua fría a hervir 10-15 min.<br>
                2. Picar, aliñar con las especias y el vino, y embutir.
            `,
            image: "assets/placeholder.png"
        },
        {
            id: '20251204_185009',
            title: "Queso de Cerdo",
            abuela: "Mari",
            author: "Mari",
            category: "Embutidos",
            description: "Fiambre tradicional de cabeza de cerdo.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Cabezas de cerdo, Manos, Orejas<br>
                - Agua, Sal<br>
                - 8 cabezas de Ajos, Pimienta, Clavo, Nuez moscada<br>
                - 1/2 l Vino de Jerez<br>
                - Tiras de lomo, Limón, Canela<br><br>
                <strong>Preparación:</strong><br>
                1. Poner todo (cabezas, manos, orejas...) en agua toda la noche para desangrar.<br>
                2. Cocer en cacerola con un poco de agua, los ajos, especias y vino hasta que esté tierno y deshuesado.<br>
                3. Poner en una servilleta, atar los cuatro picos y poner encima una tabla con mucho peso. Al otro día se puede comer.
            `,
            image: "assets/queso_cerdo.png"
        },
        {
            id: '20251204_185026',
            title: "Liebre Guisada",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes de Caza",
            description: "Guiso tradicional de liebre con vino y especias del campo.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1 Liebre, Tocino (150 grs)<br>
                - Ajo, cebolla, perejil<br>
                - Pimienta, sal, una rama de tomillo<br>
                - Un vaso de Vino Tinto, Vinagre<br>
                - Aceite, un poco de tomate una cucharada<br>
                - Arroz (200 grs)<br><br>
                <strong>Preparación:</strong><br>
                1. Limpiar bien la liebre. En un recipiente hondo poner ajo, pimienta, sal, vinagre, dos vasos de vino tinto y tomillo. Macerar toda la noche.<br>
                2. En una cacerola con aceite caliente, dorar la liebre troceada con el tocino fino. Añadir cebolla picada y tomate.<br>
                3. Cuando esté tierna la carne, añadir el caldo de la maceración y agua. Cocer hasta que esté muy tierna.<br>
                4. Se puede añadir arroz al final para espesar.
            `,
            image: "assets/liebre_guisada.png"
        },
        {
            id: '20251204_185030_1',
            title: "Sopa de Croqueta",
            abuela: "Mari",
            author: "Mari",
            category: "Sopas",
            description: "Una forma creativa de aprovechar el caldo con pequeñas bolitas fritas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Caldo de ave o de cocido<br>
                - Miga de pan, harina de garbanzo<br>
                - Huevo, perejil, ajo<br><br>
                <strong>Preparación:</strong><br>
                1. Hacer bolitas del tamaño de una pepita con miga de pan, huevo, ajo y perejil picado.<br>
                2. Pasarlas por harina de garbanzo y freír en aceite bien caliente.<br>
                3. Añadir al caldo muy caliente justo antes de servir.
            `,
            image: "assets/placeholder.png"
        },
        {
            id: '20251204_185030_2',
            title: "Sopa de Pescado",
            abuela: "Mari",
            author: "Mari",
            category: "Sopas",
            description: "Sopa marinera con picada de frutos secos.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Pescado blanco (merluza o similar), vino blanco<br>
                - Cebolla, ajo, pimiento, tomate, perejil<br>
                - Almendras y avellanas tostadas<br>
                - Pan frito, sal y azafrán<br><br>
                <strong>Preparación:</strong><br>
                1. Cocer el pescado con cebolla, agua y vino blanco. Reservar.<br>
                2. Hacer un sofrito con cebolla, pimiento, tomate y ajo. Majar las almendras, avellanas, azafrán y pan frito.<br>
                3. Unir todo con el caldo, añadir el pescado desmenuzado y dejar hervir unos minutos.
            `,
            image: "assets/sopa_pescado.png"
        },
        {
            id: '20251204_185037_1',
            title: "Huevos a la Americana",
            abuela: "Mari",
            author: "Mari",
            category: "Huevos",
            description: "Huevos rellenos con bechamel y fritos, servidos con mahonesa.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Huevos duros<br>
                - Pasta de croquetas o bechamel espesa<br>
                - Salsa mahonesa<br><br>
                <strong>Preparación:</strong><br>
                1. Cortar los huevos duros por la mitad. Rellenar con la masa de croquetas fría.<br>
                2. Rebozar el conjunto y freír. Servir cubiertos con salsa mahonesa.
            `,
            image: "assets/huevos_americana.png"
        },
        {
            id: '20251204_185043',
            title: "Carne con Alcachofas",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes",
            description: "Guiso tierno de ternera con el aroma de las alcachofas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Ternera para guisar<br>
                - Alcachofas limpias<br>
                - Ajo, perejil, cebolla, pimiento<br>
                - Vino blanco, sal, manteca o aceite<br><br>
                <strong>Preparación:</strong><br>
                1. Sofreír la carne en manteca o aceite con ajo y cebolla picada.<br>
                2. Añadir las alcachofas troceadas, el pimiento picado y perejil.<br>
                3. Regar con vino blanco, salar y cocer a fuego lento añadiendo un poco de agua o caldo hasta que la carne esté tierna.
            `,
            image: "assets/carne_alcachofas.png"
        },
        {
            id: '20251204_185053',
            title: "Enamorados",
            abuela: "Mari",
            author: "Mari",
            category: "Entrantes",
            description: "Filetes enrollados con jamón y huevo como un abrazo.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Filetes de carne muy delgados<br>
                - Picadillo de jamón, huevo duro, perejil<br>
                - Harina, vino blanco, manteca o aceite, cebolla<br><br>
                <strong>Preparación:</strong><br>
                1. Sobre cada filete poner un poco de picadillo de jamón, huevo duro y perejil. Enrollar y atar.<br>
                2. Rehogar en manteca caliente, espolvorear harina, añadir vino blanco y cebolla picada. Dejar reducir hasta que esté tierno.
            `,
            image: "assets/enamorados.png"
        },
        {
            id: '20251204_185057',
            title: "Calamares Rellenos",
            abuela: "Mari",
            author: "Mari",
            category: "Pescados",
            description: "Calamares en su tinta con relleno tradicional.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Calamares limpios<br>
                - Cebolla picada, Pimentón<br>
                - Pan humedecido, Ajo, Perejil<br>
                - Tinta de calamar, Caldo o Agua<br><br>
                <strong>Preparación:</strong><br>
                1. Limpiar los calamares. Sofreír cebolla con pimentón y el picadillo de las patas/aletas.<br>
                2. Mezclar con pan humedecido y rellenar los calamares, cerrándolos con un palillo.<br>
                3. Freír en aceite y luego cocer en una cacerola con cebolla dorada, caldo y la tinta disuelta.
            `,
            image: "assets/calamares_rellenos.png"
        },
        {
            id: '20251204_185105_1',
            title: "Patatas Rellenas",
            abuela: "Mari",
            author: "Mari",
            category: "Varios",
            description: "Patatas vaciadas y rellenas de carne, terminadas en guiso.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Patatas grandes<br>
                - Carne picada rehogada con cebolla y especias<br>
                - Huevo batido, harina<br><br>
                <strong>Preparación:</strong><br>
                1. Pelar las patatas y hacerles un agujero en medio (vaciarlas).<br>
                2. Rellenar con la carne preparada. Tapar el agujero con un trozo de patata.<br>
                3. Pasar por harina y huevo batido, freír y luego cocer en un poco de caldo o salsa hasta que la patata esté tierna.
            `,
            image: "assets/patatas_rellenas.png"
        },
        {
            id: '20251204_185105_2',
            title: "Bola de Carne",
            abuela: "Mari",
            author: "Mari",
            category: "Carnes",
            description: "Especie de embutido casero hecho de carne de vaca y tocino.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - 1/2 Kg Carne picada (vaca), tocino<br>
                - Ajo, perejil, pan rallado, pimienta, sal<br>
                - 2 Huevos batidos<br><br>
                <strong>Preparación:</strong><br>
                1. Mezclar la carne con ajo, perejil, sal, pimienta, pan rallado and los huevos batidos.<br>
                2. Amasar bien y volcar en una servilleta limpia apretando de modo que forme una bola.<br>
                3. Cocer en el caldo del cocido. Retirar la servilleta y servir en rodajas.
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/20251204_185105.jpg"
        },
        {
            id: '20251204_184849_1',
            title: "Roscos (Variante)",
            abuela: "Mari",
            author: "Mari",
            category: "Postres",
            description: "Roscos con raspadura de limón y canela.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Aceite, raspadura de un limón<br>
                - Una taza de aceite frito y frío<br>
                - Una ramita de canela frita en el aceite<br>
                - Harina, tres huevos, quitando tres claras<br><br>
                <strong>Preparación:</strong><br>
                1. Se baten las claras a punto de nieve.<br>
                2. Se añade el azúcar, las yemas y el aceite frío.<br>
                3. Se va incorporando la harina poco a poco y se amasa bien. Formar roscos y hornear o freír.
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/20251204_184849.jpg"
        },
        {
            id: '20251204_185037_2',
            title: "Huevos con Tomate",
            abuela: "Mari",
            author: "Mari",
            category: "Huevos",
            description: "Huevos en rodajas con salsa de tomate y champiñones.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                - Huevos duros, Salsa de tomate<br>
                - Perejil, Vino blanco, Champiñón picado<br><br>
                <strong>Preparación:</strong><br>
                1. Cortar los huevos duros en ruedas blancas.<br>
                2. Mezclar salsa de tomate con perejil, vino blanco y champiñones picados.<br>
                3. Verter sobre el huevo y servir caliente.
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/20251204_185037.jpg"
        },

        {
            id: 'lili_2',
            title: "Tortilla patatas",
            abuela: "Lili",
            author: "Lili",
            category: "Entrantes",
            description: "La clásica tortilla de patatas, jugosa y con el punto justo de cocción.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Patatas depende del número de personas. Cuatro o cinco<br>
                Huevos seis o siete<br>
                Sal poca<br>
                Pimientos verdes dos o tres<br>
                Una cebolla<br><br>
                <strong>Como se hace:</strong><br>
                Se fríen lentamente las patatas a rodajitas finas con la cebolla Juliana y el pimiento en trozos pequeños que queden blanditos  se escurren y se aparta hasta que se batan los huevos y se mezcla todo y se cuajan lentamente dándole la vuelta pero que no se quede muy seca por dentro.....es difícil darle el punto
            `,
            image: "assets/tortilla_patatas.png"
        },
        {
            id: 'lili_3',
            title: "Mousse de limon",
            abuela: "Lili",
            author: "Lili",
            category: "Postres",
            description: "Un postre refrescante y ligero, servido en copas decoradas.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Un vaso de zumo de limón<br>
                Una lata de leche condensada<br>
                Una tarrina grande de nata líquida<br><br>
                <strong>Como se hace:</strong><br>
                Se mezcla la leche condensada y la nata líquida<br>
                Y después se añade poco a poco el zumo con la batidora como sí fuera una mahonesa....y se sirve en copas donde previamente el filo se moja de zumo y azúcar
            `,
            image: "assets/mousse_limon.png"
        },

        {
            id: 'lili_5',
            title: "Huevos rellenos",
            abuela: "Lili",
            author: "Lili",
            category: "Entrantes",
            description: "Huevos rellenos de atún y tomate, cubiertos de mahonesa.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Huevos dos por persona<br>
                Atún<br>
                Perejil  y un ajo machacado<br>
                Tomate frito un tetra brik pequeño<br>
                Mahonesa<br>
                Lechuga y lo que se quiera de adorno ,puntas de espárragos ,tomatitos cherry,aceitunas  etc etc<br><br>
                <strong>Como se hace:</strong><br>
                Se cuecen los huevos y se apartan las yemas partiéndolos por la mitad<br>
                Con las yemas se mezcla el atún ,el tomate y el aliño del perejil<br>
                Se rellenan las claras y se ponen en una fuente boca-abajo y se cubren de mahonesa y se adornan
            `,
            image: "assets/huevos_rellenos.png"
        },



        {
            id: 'lili_9',
            title: "Flan",
            abuela: "Lili",
            author: "Lili",
            category: "Postres",
            description: "Flan de leche condensada, suave y dulce.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Tres huevos<br>
                Una lata de leche condensada<br>
                Una lata y media de leche<br>
                Caramelo líquido<br><br>
                <strong>Como se hace:</strong><br>
                Se echa caramelo en la flanera y se reserva<br>
                Se mezclan todo lo demás en la batidora y se añade a la flanera<br>
                Se mete en el horno a 180 hasta que salga la aguja limpia....suele tardar media hora
            `,
            image: "assets/flan_lili.png",
            originalImage: "assets/wa_manuscrito_39.jpg"
        },
        {
            id: 'lili_10',
            title: "Bizcocho",
            abuela: "Lili",
            author: "Lili",
            category: "Postres",
            description: "Bizcocho de yogur de limón, esponjoso y tradicional.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                3 huevos<br>
                1 yogur de limón<br>
                3 vasos de yogur de harina<br>
                3 vasos de yogur de azúcar<br>
                1 vaso de yogur de aceite desahumado de oliva frío porque se te arruga el vaso del yogur.......ja ja<br>
                1 sobre de levadura<br>
                La ralladura de un limón<br><br>
                <strong>Como se hace:</strong><br>
                Se unta el molde de margarina y de harina sacudiéndolo por sí sobra y se aparta<br>
                Se bate todos los demás ,el orden en que se echan no lo se pues pienso que luego influye en que suba más o menos.Se echa la masa en el molde.El horno está   previamente a 180<br>
                 y se mete sin abrir el horno hasta que se ve doradito.....o la aguja sale limpia
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/wa_manuscrito_38.jpg"
        },
        {
            id: 'lili_11',
            title: "Berenjenas rellenas de carne",
            abuela: "Lili",
            author: "Lili",
            category: "Verduras",
            description: "Berenjenas gratinadas rellenas de carne y bechamel.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Dos berenjenas ..una por persona<br>
                1/2 de carne picada , mitad cerdo y mitad ternera<br>
                Ajo uno,perejil,pimienta y sal<br>
                Chorreon de tomate frito<br>
                Bechamel y queso rallado<br><br>
                <strong>Como se hace:</strong><br>
                Se vacían las berenjenas de la pulpa<br>
                Se sofríe la pulpa con la carne y los aliños, ajo etc...y el tomate<br>
                Se rellenan las berenjenas y se cubren de bechamel y el queso rallado<br>
                Y se meten al horno 1/4 de hora para que se gratinen  y ablanden la piel  un poco<br>
                A veces se pueden cocer un poco la piel aparte para que no estén  crudas pero con cuidado de no romperlas.
            `,
            image: "assets/placeholder.png"
        },

        {
            id: 'lili_13',
            title: "Espinacas con bechamel",
            abuela: "Lili",
            author: "Lili",
            category: "Verduras",
            description: "Espinacas cremosas gratinadas con piñones y queso.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Dos o tres paquetes de espinacas congeladas<br>
                Medio litro o más de bechamel<br>
                Nuez moscada<br>
                Piñones<br>
                Ajos  dos o tres dientes<br>
                Queso rallado<br><br>
                <strong>Como se hace:</strong><br>
                Se cuecen las espinacas  y se escurren  bien<br>
                Se ponen en la fuente de horno<br>
                Se fríen los ajos solo dorados y se añaden por encima  con un poco del aceite<br>
                A continuación  la bechamel mezclada con la nuez  moscada<br>
                Y por último los piñones y el queso rallado<br>
                A la hora de comer se meten al horno y se gratinan
            `,
            image: "assets/placeholder.png"
        },

        {
            id: 'lili_15',
            title: "Mouse de Queso",
            abuela: "Lili",
            author: "Lili",
            category: "Postres",
            description: "Tarta de queso rápida con cuajada y fondo de caramelo.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                2 sobres de cuajada<br>
                1 tarrina de queso Filadelfia<br>
                2 tetra-brik de nata (pequeños)<br>
                1 vaso leche<br>
                1 vaso azúcar<br><br>
                <strong>Como se hace:</strong><br>
                Se mezclan todos los ingredientes y se calienta hasta que aparezca que va a hervir. Y se echa en un recipiente que tiene la pared de caramelo líquido, luego se enfria en la nevera para que cuaje - Buen provecho
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/manuscrito_mouse_queso.jpg"
        },
        {
            id: 'lili_16',
            title: "El Salmorejo",
            abuela: "Lili",
            author: "Lili",
            category: "Entrantes",
            description: "Salmorejo cordobés tradicional con pan, tomate y su guarnición.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                Pan blanco fresco (1/2 PIÃ‘A)<br>
                Tomates (4)<br>
                Ajo (1) diente<br>
                Pimiento verde<br>
                2 Huevos Duros<br>
                1 Naranja<br>
                1 Atún<br>
                1 Jamón Serrano<br><br>
                <strong>Como se hace:</strong><br>
                1) Pan se pone en remojo (1/2 hr)<br>
                2) Pelamos tomates<br>
                3) Vaso Turmix = Pan estrujado, Tomates sin semilla y estrujado, Ajo entero, Punta Pimiento, Chorreon Aceite. Se va añadiendo aceite hasta conseguir punto, Un poco de sal
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/manuscrito_salmorejo.jpg"
        },
        {
            id: 'encarna_1',
            title: "Estofado de la Abuela Encarna",
            abuela: "Lili",
            author: "Lili",
            category: "Guisos y Cuchara",
            description: "Estofado tradicional de ternera con verduras a fuego lento.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                1 cebolla, 1 pimiento, 1 tomate sin piel<br>
                Ternera a cuadritos (sin grasa ni tendones)<br>
                Zanahorias (3 o 4), 1 bolsa de guisantes<br>
                1 vaso de vino blanco<br>
                Patatas (3 o 4)<br>
                Sal, pimienta, aceite<br><br>
                <strong>Preparación:</strong><br>
                1. Se dora 1 cebolla en la olla con aceite y se añade 1 pimiento y 1 tomate sin piel.<br>
                2. Este sofrito se pasa por la batidora para que no queden trozos.<br>
                3. Se añade la ternera a cuadritos y se sofríe.<br>
                4. Añadir zanahorias y guisantes. Todo a fuego lento + 1 vaso de vino blanco.<br>
                5. Añadir un poco de agua y cocinar a fuego lento 3 o 4 horas (en olla express 1/2 hora).<br>
                6. Aparte se fríen patatas a cuadritos y se añaden.<br>
                7. Salpimentar al gusto.<br>
                <br><em><a href="javascript:void(0)" onclick="window.openImageViewer('assets/manuscrito_estofado_encarna_2.jpg')">Ver manuscrito alternativo (con anotaciones)</a></em>
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/manuscrito_estofado_encarna_1.jpg"
        },
        {
            id: 'lili_cocido',
            title: "Cocido de Lili",
            abuela: "Lili",
            author: "Lili",
            category: "Guisos",
            description: "Cocido completo con garbanzos, carnes y verduras variadas. Receta de Lili.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                1/2 kg Garbanzos (remojo noche anterior con agua tibia y sal)<br>
                Carnes: 1/4 kg pollo, 1/4 kg ternera, tocino fresco (un trozo), hueso de jamón<br>
                Verduras: Patata, zanahoria, habicholillas, calabacín, calabaza, puerro, nabo, col, apio<br>
                2 pastillas de Avecrem, Sal<br><br>
                <strong>Preparación:</strong><br>
                1. Poner todo en una olla cubierto de agua (o más).<br>
                2. Cocinar a fuego lento cuando empiece a hervir.<br>
                3. Mantener hasta que los garbanzos estén tiernos (toda la mañana mejor).<br>
                <br><em><a href="javascript:void(0)" onclick="window.openImageViewer('assets/manuscrito_cocido_lili_2.jpg')">Ver segundo manuscrito (Lili)</a></em>
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/manuscrito_cocido_lili_1.jpg"
        },
        {
            id: 'lili_pisto',
            title: "Pisto",
            abuela: "Lili",
            author: "Lili",
            category: "Verduras",
            description: "Pisto tradicional de verduras a fuego lento con tomate.",
            fullRecipe: `
                <strong>Ingredientes:</strong><br>
                1 cebolla<br>
                2 calabacines, 2 berenjenas<br>
                2 pimientos verdes (o más), 1 pimiento rojo<br>
                Sal, pimienta, algo de ajo<br>
                Tomate frito<br>
                Aceite<br><br>
                <strong>Preparación:</strong><br>
                1. Se pone en la olla el culo de aceite.<br>
                2. Se pican todas las verduras (cebolla, calabacines, berenjenas, pimientos).<br>
                3. Se añaden a la olla con sal, pimienta y un poco de ajo.<br>
                4. Cocinar a fuego lento.<br>
                5. Cuando empiece a hervir (y esté tierno), al final se añade el tomate frito para que no se pegue.
            `,
            image: "assets/placeholder.png",
            originalImage: "assets/manuscrito_pisto.jpg"
        }
    ];

    // Quick fix to assign "Mari" and images to all currently defined recipes
    // Category Mapping Logic
    const categoryMap = {
        "Postres": "Postres y Dulces",
        "Salados": "Entrantes y Tapas",
        "Cuchara": "Guisos y Cuchara",
        "Guisos": "Guisos y Cuchara",
        "Sopas": "Guisos y Cuchara",
        "Carnes": "Carnes",
        "Carnes de Caza": "Carnes",
        "Pastas": "Arroces y Pastas",
        "Arroces": "Arroces y Pastas",
        "Pescados": "Pescados y Mariscos",
        "Entrantes": "Entrantes y Tapas",
        "Embutidos": "Entrantes y Tapas",
        "Huevos": "Entrantes y Tapas",
        "Varios": "Entrantes y Tapas",
        "Verduras": "Guisos y Cuchara"
    };

    // List of recipes belonging to Abuela Amelia
    const ameliaTitles = [
        "Pestiños", "Rosquitos de Vino y Manteca", "Ochios", "Magdalenas de Pueblo",
        "Bizcocho de Almendra", "Merengues al Cacao", "Roscos (Receta Antigua)",
        "Magdalenas (Gran Cantidad)", "Empanadillas", "Panqueques a la Crema",
        "Bollos de Leche", "Albondiguillas de Patatas", "Galletas de Patatas",
        "Bollos de Manteca", "Roscón de Reyes", "Galletas Caseras", "Alubias Estofadas",
        "Morcilla Extremeña", "Chorizo Extremeño", "Riñones al Jerez", "Salchichas Caseras",
        "Queso de Cerdo", "Liebre Guisada", "Sopa de Croqueta", "Sopa de Pescado",
        "Huevos a la Americana", "Carne con Alcachofas", "Enamorados", "Calamares Rellenos",
        "Patatas Rellenas", "Bola de Carne", "Roscos (Variante)", "Huevos con Tomate"
    ];


    // Image Mapping for newly generated images
    const imageMap = {
        // Lili
        "Berenjenas rellenas de carne": "assets/berenjenas_rellenas.png",
        "Espinacas con bechamel": "assets/espinacas_bechamel.png",
        "Mouse de Queso": "assets/mouse_queso.png",
        "El Salmorejo": "assets/salmorejo_cordobes.png",
        "Bizcocho": "assets/bizcocho_yogur.png",

        // Amelia
        "Pestiños": "assets/pestinos.png",
        "Rosquitos de Vino y Manteca": "assets/rosquitos_vino.png",
        "Ochios": "assets/ochios.png",
        "Magdalenas de Pueblo": "assets/magdalenas_pueblo.png",
        "Bizcocho de Almendra": "assets/bizcocho_almendra.png",
        "Merengues al Cacao": "assets/merengues_cacao.png",
        "Roscos (Receta Antigua)": "assets/roscos_antigua.png",
        "Empanadillas": "assets/empanadillas.png",
        "Panqueques a la Crema": "assets/panqueques.png",
        "Bollos de Leche": "assets/bollos_leche.png",
        "Albondiguillas de Patatas": "assets/albondigas_patata.png",
        "Galletas de Patatas": "assets/galletas_patata.png",
        "Bollos de Manteca": "assets/bollos_manteca.png",
        "Roscón de Reyes": "assets/roscon_reyes.png",
        "Galletas Caseras": "assets/galletas_caseras.png",
        "Riñones al Jerez": "assets/rinones_jerez.png",

        // Recuperadas (Old Brain)
        "Arroz Negro": "assets/arroz_negro_mari.png",
        "Migas": "assets/migas_tradicionales.png",
        "Mousse de limon": "assets/mousse_limon_lili.png",
        "Huevos rellenos": "assets/huevos_rellenos_lili.png",
        "Tortilla patatas": "assets/tortilla_patatas_lili.png",

        "Sopa de Pescado": "assets/sopa_pescado.png",
        "Huevos a la Americana": "assets/huevos_americana.png",
        "Calamares Rellenos": "assets/calamares_rellenos.png",
        "Patatas Rellenas": "assets/patatas_rellenas.png",
        "Queso de Cerdo": "assets/queso_cerdo.png",
        "Chorizo Extremeño": "assets/chorizo_extremeno.png",
        "Morcilla Extremeña": "assets/morcilla_extremena.png",
        "Enamorados": "assets/enamorados.png",
        "Redondo a la Mostaza": "assets/redondo_mostaza_mari.png"
    };

    // Quick fix to assign "Mari", specific images, and remap categories

    recipes.forEach(r => {
        // Default assignment
        if (!r.abuela) r.abuela = "Mari";
        if (!r.author) r.author = r.abuela;
        if (r.author === "Receta de la Abuela") r.author = "Mari";

        // Reassign to Amelia if in loop
        if (ameliaTitles.includes(r.title)) {
            r.abuela = "Amelia";
            r.author = "Amelia";
        }

        // Remap Category
        if (categoryMap[r.category]) {
            r.category = categoryMap[r.category];
        }

        // AutoLink Images Logic
        if (r.id.startsWith('2025')) {
            const baseId = r.id.split('_').slice(0, 2).join('_'); // Get 20251204_184250 part

            // Set original image reference
            if (!r.originalImage) {
                r.originalImage = `assets/${baseId}.jpg`;
            }
            // Fix orientation for these camera uploads (verified by checking 20251204_184237.jpg)
            // r.rotation = 90; // Rotation removed as source images are fixed
        }

        // Special case for id '1' (Pastel Cierva)
        if (r.id === '1') {
            r.originalImage = 'assets/20251204_184237.jpg';
            // r.rotation = 90;
        }

        // Apply Image from Map
        if (imageMap[r.title]) {
            r.image = imageMap[r.title];
        }
    });

    const recipeGrid = document.getElementById('recipeGrid');
    const abuelaTabs = document.querySelectorAll('.tab-btn[data-abuela]');
    const categoryContainer = document.querySelector('.category-filter-container');

    // State
    let currentAbuela = 'all';
    let currentCategory = 'all';
    let currentSearchTerm = '';

    // 1. Extract Categories for Filters
    function renderCategoryFilters() {
        // Categories for current abuela (or all if currentAbuela is 'all')
        const filteredForCategories = currentAbuela === 'all'
            ? recipes
            : recipes.filter(r => r.abuela === currentAbuela);

        const categories = new Set(filteredForCategories.map(r => r.category).filter(Boolean));

        // Update Total Recipes Tab count
        const totalTab = document.getElementById('totalRecipesTab');
        if (totalTab) {
            totalTab.textContent = `Todas las Recetas (${recipes.length})`;
        }

        let html = '';
        Array.from(categories).sort().forEach(cat => {
            html += `<button class="category-btn ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>`;
        });

        // The "Todas las recetas" button in the second line is removed per user request
        categoryContainer.innerHTML = html;

        // Add Listeners
        categoryContainer.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const newCat = e.target.dataset.category;

                // Toggle logic: if clicking same active category, go back to 'all'
                if (currentCategory === newCat && newCat !== 'all') {
                    currentCategory = 'all';
                } else {
                    currentCategory = newCat;
                }

                renderCategoryFilters(); // Re-render to update active states
                filterAndRender();
            });
        });
    }

    // Sorting and Randomizing logic
    // Prominent recipes: Top 6 Lili + Top 6 Mari/Amelia (12 total = 2 rows of 6)
    const topLiliIds = ['lili_croquetas', 'lili_pudin_pescado', 'lili_andrajos', 'lili_empanada', 'lili_gazpachuelo', 'lili_pavo_trufao'];
    const topMariIds = ['20260111_01', '20260111_02', '20260111_04', '20260111_05', '1', '20251204_184404']; // Includes Albóndigas de Bacalao

    function sortAndRandomize() {
        const topLili = recipes.filter(r => topLiliIds.includes(r.id));
        const topMari = recipes.filter(r => topMariIds.includes(r.id));
        const rest = recipes.filter(r => !topLiliIds.includes(r.id) && !topMariIds.includes(r.id));

        // Mixed top 12 (interleaved: Lili, Mari/Amelia, Lili, Mari/Amelia...)
        const top12 = [];
        for (let i = 0; i < 6; i++) {
            if (topLili[i]) top12.push(topLili[i]);
            if (topMari[i]) top12.push(topMari[i]);
        }

        // Shuffle rest
        const shuffledRest = rest.sort(() => Math.random() - 0.5);

        // Replace original array content - using splice to keep the same reference if needed
        const newOrder = [...top12, ...shuffledRest];
        recipes.length = 0;
        recipes.push(...newOrder);
    }

    sortAndRandomize();
    renderCategoryFilters();

    // Footer Count Update
    const copyrightEl = document.getElementById('copyright');
    if (copyrightEl) {
        copyrightEl.innerHTML = `&copy; 2026 ${recipes.length} Recetas de las Abuelas. Hecho con â¤ï¸.`;
    }

    filterAndRender();

    // Abuela Tab Click Event
    abuelaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active class
            abuelaTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentAbuela = tab.dataset.abuela;
            currentCategory = 'all'; // Reset category when changing abuela

            renderCategoryFilters();
            filterAndRender();
        });
    });

    function filterAndRender() {
        if (!recipeGrid) return;

        const filteredRecipes = recipes.filter(r => {
            // Global Search Priority overrides tabs
            if (currentSearchTerm) {
                const term = currentSearchTerm.toLowerCase();
                return r.title.toLowerCase().includes(term) ||
                    r.description.toLowerCase().includes(term) ||
                    (r.fullRecipe && r.fullRecipe.toLowerCase().includes(term)) ||
                    r.category.toLowerCase().includes(term) ||
                    r.author.toLowerCase().includes(term);
            }

            const matchAbuela = currentAbuela === 'all' || r.abuela === currentAbuela;
            const matchCategory = currentCategory === 'all' || r.category === currentCategory;
            return matchAbuela && matchCategory;
        });

        renderRecipes(filteredRecipes, recipeGrid);
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    function handleSearch() {
        currentSearchTerm = searchInput.value.trim();
        filterAndRender();
        // Scroll to recipes if we have a search term
        if (currentSearchTerm) {
            document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // Real-time search (optional, but nice)
        searchInput.addEventListener('input', (e) => {
            // If cleared, reset immediately
            if (e.target.value === '') {
                currentSearchTerm = '';
                filterAndRender();
            }
        });
    }

    // Scroll handling for active nav links
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for scroll animations (Dedication text, etc.)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% visible
    });

    // Biography Full Stories Data
    const bioStories = {
        lili: {
            title: "Historia de Maria Luisa (Lili)",
            content: `
                <p style="text-align: justify;">Maria Luisa, conocida por todos como Lili, nació en <strong>Úbeda</strong>, aunque siempre fue sevillana de corazón y alma. Desde muy joven mostró una mente brillante y curiosa, lo que la llevó a estudiar <strong>Química</strong>, rompiendo barreras en una época en la que pocas mujeres se adentraban en las ciencias puras.</p>
                <p style="text-align: justify;">Su pasión por la enseñanza la llevó a dedicar su vida a la docencia, donde no solo transmitía fórmulas y reacciones, sino también valores de esfuerzo y superación. En Úbeda encontró el amor en <strong>Alfonso</strong>, formando una familia con sus hijos <strong>Andrés, Alfonso y Manolo</strong>, que fue su mayor orgullo.</p>
                <p style="text-align: justify;">En la cocina, Lili no seguía recetas al pie de la letra. Su secreto era el "ojímetro", esa intuición que convertía cada plato en una creación única. Cada comida era un experimento de sabor que siempre resultaba en un éxito rotundo, reuniendo a su familia alrededor de una mesa llena de vida.</p>
                <p style="text-align: justify;">Aunque Lili ya no está con nosotros, su legado vive en sus seis nietos: <strong>Ana, Carlos, Andrea, Vera, Daniela y Leo</strong>. No todos llegaron a conocerla en persona, pero la conocen a través de sus recetas, de las historias que se cuentan en cada reunión familiar, y del amor incondicional que sembró en cada generación. Su cocina sigue siendo el puente que une a la familia, manteniendo vivo su espíritu en cada plato que se comparte.</p>
            `
        },
        mari: {
            title: "Historia de María Aurora (Mari)",
            content: `
                <p style="text-align: justify;">Natural de <strong>Écija</strong>, Mari ha convertido la cocina en su lenguaje más sincero de amor. No es solo comida lo que prepara, sino abrazos servidos en un plato. Sus recetas, siempre abundantes y rebosantes de sabor, son el imán que reúne a la familia cada domingo, convirtiendo cualquier ocasión en una celebración de la vida y la unión a través de los guisos tradicionales que borda con maestría.</p>
                <p style="text-align: justify;">Orgullosa madre de <strong>Javi, Cintia e Irene</strong>, y cariñosa abuela de sus cuatro nietos: <strong>Luna, Pablo, Daniela y Leo</strong>. Junto a <strong>Fermín</strong>, su compañero inquebrantable de vida, ha construido un hogar donde la risa y el cariño son constantes. Su alegría contagiosa y su dedicación son el mejor legado que nos acompaña día a día, enseñándonos que la felicidad se cocina a fuego lento.</p>
                <p style="text-align: justify;">Mari sigue siendo el alma incansable de la familia, no solo manteniendo viva la tradición culinaria de su madre, sino enriqueciéndola con su toque personal. Su cocina es mucho más que un lugar físico; es un espacio acogedor de encuentro, confesiones, risas y amor incondicional, donde cada plato cuenta una historia de cuidado y cada reunión fortalece los lazos que nos unen.</p>
            `
        }
    };

    const animatedElements = document.querySelectorAll('.dedication-text, .bio-card');
    animatedElements.forEach(el => observer.observe(el));

    // Bio Modal logic
    const bioModal = document.getElementById('bioModal');
    const bioTitle = document.getElementById('bioModalTitle');
    const bioContent = document.getElementById('bioModalBody');

    window.openBio = function (person) {
        const story = bioStories[person];
        if (story) {
            bioTitle.textContent = story.title;
            bioContent.innerHTML = story.content;
            bioModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeBioModal = function () {
        bioModal.classList.remove('show');
        document.body.style.overflow = '';
    };

    // Image Viewer Logic
    const imageViewerModal = document.getElementById('imageViewerModal');
    const fullSizeImage = document.getElementById('fullSizeImage');
    let currentRotation = 0;
    let currentZoom = 1;

    window.openImageViewer = function (src, rotation = 0) {
        if (!imageViewerModal || !fullSizeImage) return;
        fullSizeImage.src = src;
        currentRotation = rotation; // Use provided rotation or default to 0
        currentZoom = 1;
        updateImageTransform();
        imageViewerModal.classList.add('show');
    };

    window.closeImageViewer = function () {
        if (!imageViewerModal) return;
        imageViewerModal.classList.remove('show');
    };

    window.rotateImage = function (deg) {
        currentRotation += deg;
        updateImageTransform();
    };

    window.zoomImage = function () {
        currentZoom = currentZoom === 1 ? 1.5 : 1; // Toggle zoom
        updateImageTransform();
    };

    function updateImageTransform() {
        if (!fullSizeImage) return;
        fullSizeImage.style.transform = `rotate(${currentRotation}deg) scale(${currentZoom})`;
    }

    // Recipe Modal logic
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    function openModal(recipe) {
        modalTitle.textContent = recipe.title;

        // Generate content dynamically if fullRecipe is missing but structured data exists
        let content = recipe.fullRecipe;
        if (!content && recipe.ingredients && recipe.steps) {
            const ingList = recipe.ingredients.map(i => `- ${i}`).join('<br>');
            const stepList = recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('<br>');
            content = `
                <strong>Ingredientes:</strong><br>
                ${ingList}<br><br>
                <strong>Como se hace:</strong><br>
                ${stepList}
            `;
        }

        modalBody.innerHTML = content || `<p>${recipe.description}</p><p><em>(Detalles completos de la receta próximamente)</em></p>`;

        // Authenticity link
        const originalLink = document.getElementById('originalLink');
        if (recipe.originalImage) {
            // Hijack the click to open our viewer instead of new tab
            originalLink.href = 'javascript:void(0)';
            originalLink.onclick = (e) => {
                e.preventDefault();
                openImageViewer(recipe.originalImage, recipe.rotation || 0);
            };
            originalLink.style.display = 'inline-flex';
        } else {
            originalLink.style.display = 'none';
        }

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ... (rest remains same)

    // Event Delegation for Recipe Grid clicks (Cards and Buttons)
    recipeGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (card) {
            e.preventDefault(); // Stop link navigation if clicking the button (which is an anchor tag)
            const recipeId = card.dataset.id;
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) {
                openModal(recipe);
            }
        }
    });

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });



    // View Toggle Logic
    const viewToggleBtn = document.getElementById('viewToggleBtn');
    const viewIcon = document.getElementById('viewIcon');

    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', () => {
            const grid = document.getElementById('recipeGrid');
            if (grid) {
                grid.classList.toggle('list-view');
                const isListView = grid.classList.contains('list-view');

                // Update Icon/Text
                viewIcon.textContent = isListView ? '⊞' : '☰';
                viewToggleBtn.classList.toggle('active', isListView);

                // Re-render to update structure (Accordion vs Card)
                filterAndRender();
            }
        });
    }

    // Update Footer Count
    const totalRecipesSpan = document.getElementById('totalRecipes');
    if (totalRecipesSpan) {
        totalRecipesSpan.textContent = recipes.length;
    }

});

function getWarmColor(str) {
    const colors = ['#E8C39E', '#D4B49F', '#B3C2A9', '#E6B89C', '#D9D0C1', '#C7B198'];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
}

function renderRecipes(recipes, container) {
    if (recipes.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay recetas disponibles aún.</p></div>';
        return;
    }

    const isListView = container.classList.contains('list-view');

    container.innerHTML = recipes.map(recipe => {
        const bgColor = getWarmColor(recipe.title);
        const isPlaceholder = recipe.image.includes('placeholder');

        if (isListView) {
            // Accordion List View Structure
            let content = recipe.fullRecipe;
            if (!content && recipe.ingredients && recipe.steps) {
                const ingList = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
                const stepList = recipe.steps.map(s => `<li>${s}</li>`).join('');
                content = `
                    <div class="recipe-accordion-details">
                        <div class="column">
                            <h4>Ingredientes</h4>
                            <ul>${ingList}</ul>
                        </div>
                        <div class="column">
                            <h4>Preparación</h4>
                            <ol>${stepList}</ol>
                        </div>
                    </div>
                `;
            } else if (content) {
                // If it's HTML string, we try to wrap it in 2 columns if it follows standard pattern
                // For now, simple wrap
                content = `<div class="recipe-accordion-details-flat">${content}</div>`;
            }

            return `
                <div class="recipe-accordion-item" data-id="${recipe.id}">
                    <div class="recipe-accordion-header">
                        <div class="header-main">
                            <span class="recipe-title">${recipe.title}</span>
                            <span class="recipe-author">De: ${recipe.author}</span>
                        </div>
                        <div class="header-side">
                            <span class="recipe-tag">${recipe.category}</span>
                            <span class="accordion-icon">v</span>
                        </div>
                    </div>
                    <div class="recipe-accordion-content">
                        ${content || `<p>${recipe.description}</p>`}
                        <div class="accordion-actions">
                            ${recipe.originalImage ? `<button class="btn-text" onclick="event.stopPropagation(); window.openImageViewer('${recipe.originalImage}', ${recipe.rotation || 0})">Ver Manuscrito Original</button>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <article class="recipe-card fade-in-up" data-id="${recipe.id}">
                <div class="recipe-image" style="background-image: url('${recipe.image}'); background-color: ${bgColor};">
                    ${isPlaceholder ? '<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; opacity:0.3; font-size:3rem;">ðŸ½ï¸</div>' : ''}
                </div>
                <div class="recipe-content">
                    <span class="recipe-tag">${recipe.category}</span>
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-author">De: ${recipe.author}</p>
                    <p class="recipe-desc">${recipe.description}</p>
                    <a href="#" class="btn-text">Ver Receta &rarr;</a>
                </div>
            </article>
        `;
    }).join('');

    // Add click events for accordion if in list view
    if (isListView) {
        container.querySelectorAll('.recipe-accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const wasActive = item.classList.contains('active');

                // Close all others
                container.querySelectorAll('.recipe-accordion-item').forEach(i => i.classList.remove('active'));

                // Toggle current
                if (!wasActive) {
                    item.classList.add('active');
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }
}

// Global close function for bio modal when clicking outside
window.addEventListener('click', (e) => {
    const bioModal = document.getElementById('bioModal');
    if (e.target === bioModal) {
        window.closeBioModal();
    }
});



