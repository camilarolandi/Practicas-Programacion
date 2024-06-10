

/* texto de color */
    const textoColor= document.getElementById ("texto")
    const boton = document.getElementById ("btn")



const cambiarColorTexto = () => {
        textoColor.classList.toggle("texto-color-sec")
        textoColor.classList.toggle("texto-color-pr")
    }

    boton.addEventListener("click", cambiarColorTexto) 


    const cajaColor = document.getElementById ("caja")


    const cambiarColorCaja =()=>{
        cajaColor. classList.toggle("caja-secondary-style")
        cajaColor. classList.toggle("caja-primary-style")
    }

cajaColor.addEventListener("click",cambiarColorCaja)



const body = document.getElementById("body")

const bodyColor = () =>{
    body.classList.toggle("body-secondary")
    body.classList.toggle("body-primary")
}

body.addEventListener("click", bodyColor)