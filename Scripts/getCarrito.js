const getCarrito = () => {
    const Carrito = document.querySelector('.lista-carrito')
    console.log(Carrito)
    const detalle = JSON.parse(localStorage.getItem('Carrito'))
    console.log(detalle)
    detalle.forEach(element => {
        const {id, nombre, descripcion, precio, imagenes} = element
        const imagen1 = imagenes[0]['imagen1']
        console.log('dentro de carrito')
        Carrito.innerHTML +=`
        <li class="item-carrito">
                        <div class="img-carrito">
                            <img src=${imagen1} alt="imagen-producto">
                        </div>
                    </li>

                    <li class="item-carrito">
                        <div>
                            <h1 class="nombre-carrito">${nombre}</h1>
                            <p class="precio-carrito">$${precio}</p><br>
                        </div>
                    </li>

                    <li class="item-carrito">
                        <div>
                            <h1 class="contador-carrito">1</h1>
                            <p class="remove-carrito">Remove</p><br>
                        </div>
                    </li>
        
        `
        
    });
}
export default getCarrito