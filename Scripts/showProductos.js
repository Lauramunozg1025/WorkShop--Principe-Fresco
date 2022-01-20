const showProductos = async (data, div) => {
    console.log('adentro')
    
    const product = await data
    console.log(data)
    product.forEach(element => {
        const {id, nombre, descripcion, precio, imagenes} = element
        const imagen1 = imagenes[0]['imagen1']
        
        div.innerHTML+=`
        <div class="producto">
            <div class="container">
                <img src=${imagen1} alt="Producto" class="imagen-producto" />
            </div>
            <div class="info-producto">
                <h1 class="nombre-producto">${nombre}</h1>
                <b class="precio-producto">$${precio}</b><br>
                <button class="add btnAgregar" id=${id}> <a id=${id} href="" class="btnAgregar" style="text-decoration: none; color: white;">VIEW PRODUCT</a></button> <br>
                <p class="descripcion-producto">
                ${descripcion}
                </p>
        </div>
    `
    });
    
}
export default showProductos