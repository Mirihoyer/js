class Perchas {
    constructor(id, material, medida, color, stock, precio, descripcion) {
        this.id = id;
        this.material = material;
        this.medida = medida;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    descuento() {
        return this.precio - (this.precio * 0.05)
    }
}
let cardContainer = document.getElementById('card-container')
const contenedorCarrito = document.getElementById('cartContainer');
const abrirCarrito = document.getElementById('openCart')
const closeButton = document.getElementById('closeCart')

let wasClosed = false;


let perchaM1 = new Perchas(1, "Madera", 45, "Natural", 100, 150, "Percha Importada de color Natural, mide 45 cm")
let perchaM2 = new Perchas(2, "Madera", 45, "Chocolate", 100, 180, "Percha Importada de color Chocolate, mide 45 cm")
let perchaM3 = new Perchas(3, "Madera", 45, "Blanco", 100, 200, "Percha Importada de color Blanco, mide 45 cm")

let perchaMadera = [perchaM1, perchaM2, perchaM3]

for (const percha of perchaMadera) {
    let div = document.createElement(`div`)
    div.classList.add('col');
    div.innerHTML = `
      <div class="card">
     <img src="./imagenes/Picture1.jpg" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title"> Percha de ${percha.material} de color ${percha.color}</h5>
       <p class="card-text">${percha.descripcion}</p>
       <button href="#" class="btn btn-primary" id="add=${percha.id}">Agregar</button>
     </div>
   </div>
  `
    cardContainer.appendChild(div)
    let botonAgregarCar = document.getElementById(`add=${percha.id}`)
    botonAgregarCar.addEventListener('click', () => {
        addToCart(percha.id);
    })
}

let carrito = []
function openCart() {

    updateCart()

    const contenedorDeModal = document.getElementById('cartContainer')
    contenedorDeModal.classList.toggle('modal-active')

}

function addToCart(id) {
    let index = perchaMadera.findIndex((elemento) => { return elemento.id === id })
    if (perchaMadera[index].stock > 0) {
        perchaMadera[index].stock--
        carrito.push(perchaMadera[index]);
        wasClosed = false;
        console.log(carrito)
    }
}

function updateCart() {
    const contenedorDeLista = document.getElementById('listContainer')

    for (const elemento of carrito) {
        let div = document.createElement('div')
        div.setAttribute('class', 'productoEnCarrito')
        div.innerHTML += `<p>Percha de ${elemento.material}</p>
                        <p>Color: ${elemento.color}</p>
                        <p>Precio: $${elemento.precio}</p>`

        contenedorDeLista.appendChild(div)
    }
}

function closeCart() {

    const contenedorDeModal = document.getElementById('cartContainer')
    const contenedorDeLista = document.getElementById('listContainer')
    contenedorDeModal.classList.toggle('modal-active')
    wasClosed = true;
    while (contenedorDeLista.lastElementChild) {
        contenedorDeLista.removeChild(contenedorDeLista.lastElementChild);
    }

}

abrirCarrito.addEventListener('click', () => { openCart() })
closeButton.addEventListener('click', () => { closeCart() })










