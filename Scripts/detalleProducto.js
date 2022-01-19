const container = document.querySelector('.container')
const infoProducto = document.querySelector('.info-producto')

const getLocalStorage = () => {
    const detalle = JSON.parse(localStorage.getItem('Producto'))
    const {id, nombre, descripcion, precio, imagenes} = detalle
    const imagen1 = imagenes[0]['imagen1']
    const imagen2 = imagenes[1]['imagen2']
    const imagen3 = imagenes[2]['imagen3']
    console.log('dentro de localstorage')
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

            <div>
                <label class="talla">S</label>
                <label class="talla">M</label>
                <label class="talla">L</label>
                <label class="talla">XL</label>
                <label class="talla">XXL</label>
            </div>

    </div>

    <button class="add">ADD TO CART</button> <br>
    <button class="buy">BUY IT NOW</button>

        <p class="descripcion-producto">
            ${descripcion}
        </p>
    </div>
    `
}

document.body.addEventListener('click', e=>{
    if(e.target.classList.contains('btn-outline-dark')){
        window.location.href = ""
    }
})
document.addEventListener('DOMContentLoaded', getLocalStorage)