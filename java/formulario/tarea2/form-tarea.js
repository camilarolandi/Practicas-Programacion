/*  TAREA 2

Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'
*/


const validarNumero=(numero)=>{
    return !isNaN(numero) && Boolean(numero)
}


const VALIDACIONES = {

    titulo:{
        validacion: (texto)=> texto && typeof texto === "string" && texto.length >= 6,
        error: "El nombre del poducto ingresado es incorrecto",

    },

    precio:{
        validacion: (numero) => validarNumero (numero) && numero >= 0,
        error: "El precio ingresado es incorrecto",
    },
    
    descripcion:{
        validacion: (texto)=> texto && texto.length >= 100,
        error: "La descripcion ingresada es muy corta, debe tener como minimo 100 caracteres",
    },

    stock:{
        validacion: (numero) => validarNumero (numero) && numero > 0,
        error:"La cantidad de stock ingresada es incorrecta",
    },


    codigo:{
        validacion: (texto)=> texto &&  typeof texto === "string" && texto.startsWith("#"),
        error: "El codigo ingresado es incorrecto",
    },

}

const obtenerValores = (formulario) => {

    const inputs =["titulo", "precio", "descripcion", "stock", "codigo"]
    const dataInputs ={}
    for (let input of inputs){
        const errorSpan = document.querySelector(".error-text-" + input)
        const inputValores = formulario[input].value
        dataInputs[input]= {
            error:errorSpan,
            validacion: VALIDACIONES[input].validacion,
            errorTexto: VALIDACIONES[input].error,
            valor: inputValores,
        }
    }
    return dataInputs
}

const formularioHTML = document.getElementById("formulario")


const handleSubmit = (evento) => {
    evento.preventDefault()
    const formulario = evento.target
    const formularioValores = obtenerValores(formulario)
    let formularioValido = true
    for (const propiedad in formularioValores){
        
        const formularioObjetos = formularioValores[propiedad]
        if (!formularioObjetos.validacion(formularioObjetos.valor)){
            formularioObjetos.error.innerText = formularioObjetos.errorTexto
            formularioValido = false
        }
        else{
            formularioObjetos.error.innerText = ""
        }
    }
    
    if (formularioValido){
        alert ("Los datos ingresados son correctos")
        formulario.reset()
    }
    else{

        alert ("Revise los datos ingresados que presentan errores")
    }

}


formularioHTML.addEventListener("submit", handleSubmit)