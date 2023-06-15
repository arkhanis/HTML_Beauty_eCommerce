
// Creo el array de todos los productos de la tienda
const productos = [
    {
        id: 1,
        titulo: "Wax Cubes",
        categoria: "Hard Wax",
        imagen: "./img/prod1.webp",
        precio: 44.9,
        stock: 59
    },
    {
        id: 2,
        titulo: "Pre Depilatory Cleansing Lotion",
        categoria: "Skin Care",
        imagen: "./img/prod12.webp",
        precio: 17.0,
        stock: 32
    },
    {
        id: 3,
        titulo: "Post Depilatory Body Lotion",
        categoria: "Skin Care",
        imagen: "./img/prod11.webp",
        precio: 15.0,
        stock: 24
    },
    {
        id: 4,
        titulo: "Medium Spatulas - Box of 500 pcs",
        categoria: "Professional Supplies",
        imagen: "./img/prod3.webp",
        precio: 11.9,
        stock: 64
    },
    {
        id: 5,
        titulo: "Post Depilatory Oil",
        categoria: "Skin Care",
        imagen: "./img/prod2.webp",
        precio: 16.9,
        stock: 21
    },
    {
        id: 6,
        titulo: "Post Depilatory Gel",
        categoria: "Skin Care",
        imagen: "./img/prod10.webp",
        precio: 16.9,
        stock: 43
    },
    {
        id: 7,
        titulo: "Large Spatulas - Box of 200 pcs",
        categoria: "Professional Supplies",
        imagen: "./img/prod8.webp",
        precio: 24.9,
        stock: 34
    },
    {
        id: 8,
        titulo: "Facial Sticks - Box of 500 pcs",
        categoria: "Professional Supplies",
        imagen: "./img/prod15.webp",
        precio: 12.9,
        stock: 27
    },
    {
        id: 9,
        titulo: "Cotton Roll - 1.1 lbs.",
        categoria: "Professional Supplies",
        imagen: "./img/prod13.webp",
        precio: 8.0,
        stock: 41
    },
    {
        id: 10,
        titulo: "Cornstarch Powder 3.52 oz.",
        categoria: "Professional Supplies",
        imagen: "./img/prod9.webp",
        precio: 3.9,
        stock: 22
    },
    {
        id: 11,
        titulo: "Gloves - Box of 100 pcs",
        categoria: "Professional Supplies",
        imagen: "./img/prod14.webp",
        precio: 7.9,
        stock: 35
    },
    {
        id: 12,
        titulo: "Small Wax Warmer",
        categoria: "Professional Supplies",
        imagen: "./img/prod4.webp",
        precio: 45.0,
        stock: 14
    },
    {
        id: 13,
        titulo: "Medium Wax Warmer",
        categoria: "Professional Supplies",
        imagen: "./img/prod5.webp",
        precio: 199.9,
        stock: 8
    },
    {
        id: 14,
        titulo: "Large Wax Warmer",
        categoria: "Professional Supplies",
        imagen: "./img/prod5.webp",
        precio: 249.9,
        stock: 8
    },
    {
        id: 15,
        titulo: "Bed Paper Roll 21 x 225 Smooth Paper - Box of 12 rolls",
        categoria: "Professional Supplies",
        imagen: "./img/prod6.webp",
        precio: 19.9,
        stock: 19
    },
    {
        id: 16,
        titulo: "Bed Paper Roll 27 x 225 High Quality Tissue Paper - Box of 12 rolls",
        categoria: "Professional Supplies",
        imagen: "./img/prod6.webp",
        precio: 39.9,
        stock: 36
    },
    {
        id: 17,
        titulo: "Professional Starter Waxing Kit",
        categoria: "Professional Supplies",
        imagen: "./img/prod16.webp",
        precio: 399.9,
        stock: 9
    },
    {
        id: 18,
        titulo: "Esthetician Apron",
        categoria: "Professional Supplies",
        imagen: "./img/prod7.webp",
        precio: 16.9,
        stock: 7
    },

]

// Traigo toda la informacion que me interesa
const contenedorProductos = document.querySelector("#contenedor-producto");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {
    // vacio el contenedor primero para que no duplique productos
    contenedorProductos.innerHTML = "";
    // recorro todos los productos para llenarlos dentro de cada tarjeta
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-estrella"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                    class="bi bi-star-fill"></i></p>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Add to cart</button>
        </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar ();
    console.log(botonesAgregar);
}

cargarProductos(productos);


// Incorporacion dinamica de los productos en las tarjeta de producto
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        // Para sacar primero la categoria "active"
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        // Le agrego la categoria active al que hace clic
        e.currentTarget.classList.add("active")

        // Le aplico este condicional para que no haga nada si es id="todos"
        if (e.currentTarget.id != "todos") {

            // Para cambiar el titulo segun la categoria
            const productoCategoria = productos.find(producto => producto.categoria === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria;

            // Al hacer clic que filtre por los productos por categorias
            const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerHTML = "All Products";
            cargarProductos(productos);
        }

    })
})

// Trabajo sobre los botones "agregar a carrito de la home"
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach( boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = []

function agregarAlCarrito(e){
    const idBoton = parseInt(e.currentTarget.id);
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        console.log(productosEnCarrito);
    }

    actualizarNumerito();

    // Guardo en el Localstorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}