import getCarrito from "./getCarrito.js"
import getData from "./getData.js"
import { bdProd } from "./url.js"



const getLocalStorage = () => {
    const container = document.querySelector('.container')
    // const infoProducto = document.querySelector('.info-producto')
    const detalle = JSON.parse(localStorage.getItem('Producto'))
    const {id, nombre, descripcion, precio, imagenes} = detalle
    const imagen1 = imagenes[0]['imagen1']
    const imagen2 = imagenes[1]['imagen2']
    const imagen3 = imagenes[2]['imagen3']
    console.log('dentro de localstorage')
    console.log(container)
    container.innerHTML+= `
    <ul class="thumbnails">
                    <li class="list-imagenes">
                        <a href="#slide1"><img src=${imagen1} /></a>
                    </li>
                    <li class="list-imagenes">
                        <a href="#slide2"><img src=${imagen2} /></a>
                    </li class="list-imagenes">
                    <li class="list-imagenes">
                        <a href="#slide3"><img src=${imagen3} /></a>
                    </li class="list-imagenes">
                    
    </ul>

                <ul class="slides">
                    <li id="slide1" class="sliders-options list-imagenes"><img src=${imagen1} alt="" /></li>
                    <li id="slide2" class="list-imagenes"><img src=${imagen2} alt="" /></li>
                    <li id="slide3" class="list-imagenes"><img src=${imagen3} alt="" /></li>
                </ul>

            
            </div>

    <div class="info-producto">
    
        <h1 class="nombre-producto">${nombre}</h1>

        <b class="precio-producto">$${precio}</b>

        <div class="form-talla">
            <p class="size">Size</p>

            <div class="d-flex">
                <label class="talla">S</label>
                <label class="talla">M</label>
                <label class="talla">L</label>
                <label class="talla">XL</label>
                <label class="talla">XXL</label>
            </div>

    </div>

    <button id=${id} class="add">ADD TO CART</button> <br>
    <button id=${id} class="buy">BUY IT NOW</button>

        <p class="descripcion-producto">
            ${descripcion}
        </p>
    </div>
    `
}

//cuando agrego un producto al carrito esta funcion la agrega
// document.body.addEventListener('click', e=>{
//     if(e.target.classList.contains('btn-outline-dark')){
//         window.location.href = ""
//     }
// })
document.addEventListener('DOMContentLoaded', e=>{
    getLocalStorage()
    const btnadd = document.querySelector('.add')
if(btnadd){
btnadd.addEventListener('click', async e=>{
    e.preventDefault()
    const id = btnadd.id
    const carrito = await getData(bdProd)
    const objeto = carrito.find(list => list.id === Number(id))
    const carritoLocal = JSON.parse(localStorage.getItem('Carrito')) || []
    carritoLocal.unshift(objeto)
    localStorage.setItem('Carrito',JSON.stringify(carritoLocal))

        // window.location.href = "infoProducto.html"
        
    })
    
    console.log('llamada a detlla')
}
}


)

const vinculo = document.getElementById('vinculo-modal')
vinculo.addEventListener('click', e=>{
    
    getCarrito()
    console.log(vinculo)
})

export default getLocalStorage




