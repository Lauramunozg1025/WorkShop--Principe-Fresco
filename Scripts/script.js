import showProductos from  "./showProductos.js"
import getData from "./getData.js"
import getCarrito from "./getCarrito.js"

import { bdProd } from "./url.js"


const productosCatalogo = document.querySelector('.main')




document.addEventListener('DOMContentLoaded', async () =>{
        const data = await getData(bdProd)
        showProductos(data, productosCatalogo)
        
    
})

//seccion para ir a la pagina de la descripcion del producto
document.addEventListener('click', async e=>{
    
    const btnDetail = e.target.classList.contains('btnAgregar')
    const id = e.target.id
    e.preventDefault()
    if(btnDetail){
        const lista = await getData(bdProd)
        console.log(lista)
        const objeto = lista.find(list => list.id === Number(id)) //borrrar
        console.log('llamada a detlla')
        console.log(objeto)
            
        localStorage.setItem("Producto", JSON.stringify(objeto))
        window.location.href = "infoProducto.html"
        
    }
})

const vinculo = document.getElementById('vinculo-modal')
vinculo.addEventListener('click', e=>{
    
    getCarrito()
    console.log(vinculo)
})


