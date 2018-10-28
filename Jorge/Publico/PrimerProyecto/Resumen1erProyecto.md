### Claves
- Tienda de camisetas personalizadas
- revindicativa
- MEMES


### Vistas (pensando en el proyecto 2. no ahora ;-))
- Home -> / -> https://www.redbubble.com/es
- catalogo /catalogo -> https://www.redbubble.com/es/shop/mens-t-shirts?cat_context=men-clothes&ref=global-nav-menu
- producto -> /camiseta/:id -> https://www.redbubble.com/es/people/azzza/works/34303051-ojos-de-bruja-reptil-patr-n-retro?cat_context=men-clothes&grid_pos=1&p=long-t-shirt&rbs=bc6be738-fb70-4495-9f34-4ef41acf14d8&ref=shop_grid&iaCode=m-tees
- personalizar -> /custom -> https://www.stickermule.com/es/products/pegatinas-parachoques/configure



### Pasos

- Maquetar las "partes comunes" (encabezado, footer, etc...)
- Maquetar las vistas en ficheros distintos
	- `index.html` ->   https://www.redbubble.com/es
	- `catalogo.html` -> https://www.redbubble.com/es/shop/mens-t-shirts?cat_context=men-clothes&ref=global-nav-menu -> https://getbootstrap.com/docs/4.1/examples/album/
	- `camiseta.html` -> https://www.redbubble.com/es/people/azzza/works/34303051-ojos-de-bruja-reptil-patr-n-retro?cat_context=men-clothes&grid_pos=1&p=long-t-shirt&rbs=bc6be738-fb70-4495-9f34-4ef41acf14d8&ref=shop_grid&iaCode=m-tees
	- `personalizar.html` -> "Formulario" al estilo https://www.stickermule.com/es/products/pegatinas-parachoques/configure -> https://getbootstrap.com/docs/4.1/examples/checkout/
- Crear la estructura de datos "fake" usando [json-generator](https://www.json-generator.com/)
	- `data/camiseta.json` -> los datos de una camiseta (autor, url de la imagen, precio, tallas, opciones, etc...)
	- `data/catalogo.json` -> conjunto de camisetas con sus detalles 
	- `data/index.json` -> conjunto de camisetas "trending"
- Vincular las estructuras de datos con los ficheros html usando AJAX y eventos tipo `click` (pinchar en el catalogo de camisetas para ver los detalles de una camiseta)


### Ideas
- https://www.stickermule.com
- https://www.redbubble.com/es/shop/nodejs?search_type=search_box
- https://getbootstrap.com/
- https://getbootstrap.com/docs/4.1/examples/
