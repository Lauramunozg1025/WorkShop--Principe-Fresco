import showProductos from  "./showProductos.js"
import getData from "./getData.js"
const bdProd = "http://localhost:3000/productos/"

const productosCatalogo = document.querySelector('.main')




document.addEventListener('DOMContentLoaded', async () =>{
        const data = await getData(bdProd)
        showProductos(data, productosCatalogo)
        
    
})

document.addEventListener('click', async e=>{
    
    const btnDetail = e.target.classList.contains('btnAgregar')
    const id = e.target.id
    e.preventDefault()
    if(btnDetail){
        const lista = await getData(bdProd)
        console.log(lista)
        const objeto = lista.find(list => list.id === Number(id))        
        localStorage.setItem("Producto", JSON.stringify(objeto))
        window.location.href = "infoProducto.html"
        
    }
})