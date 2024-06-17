/* TAREA DE CLASE
username tiene que tener una mayuscula, y un '-' y almenos 4 caracteres
password tiene que tener una mayuscula y un '#'
email Debe ser email (usar la expresion regular)
Si el error el multiple EJEMPLO, el username y el password esta mal, tirara 2 textos, es decir cada input tendra su posibilidad de fallar
Si esta todo bien por consola diran 'exito' */



const validarMayuscula = (texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return (textoMinuscula !== texto)
}


const VALIDACIONES ={

    username:{
        validacion: (texto) => texto && texto.includes("-") && texto.length > 4 && validarMayuscula (texto),
        error:"El usuario es incorrecto",

    },

    email:{
        validacion: (email)=> (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)),
        error:"El email es incorrecto",
    },

    password:{
        validacion: (texto)=> texto && texto.includes("#") && validarMayuscula(texto),
        error:"La contraseña es incorrecta",
    },

}


const obtenerValores = (formulario) => {

    const inputs = ['username', 'email', 'password']
    const inputsData = {}
    for (let input of inputs){

        const spanError = document.querySelector (".error-texto-" + input)
        const valorInput= formulario[input].value
        inputsData[input] = {
            error: spanError,
            validacion: VALIDACIONES[input].validacion,
            errorTexto: VALIDACIONES[input].error,
            valor: valorInput
        }
    }

return inputsData
}


const formLoginHTML= document.getElementById("form")

const handleSubmit = (evento) => {
    evento.preventDefault()
    const formulario = evento.target
    const formularioValores = obtenerValores(formulario)
    console.log(formularioValores)
    for (const propiedad in formularioValores){
            
        const formularioObjetos = formularioValores[propiedad]
        if (!formularioObjetos.validacion(formularioObjetos.valor)){
            formularioObjetos.error.innerText = formularioObjetos.errorTexto
        }
        else{
            /* formularioObjetos.error.innerText = "Los datos ingresados son correctos" */
        formLoginHTML.innerText= "Los datos ingresados son correctos"
        }
    }
}

formLoginHTML.addEventListener("submit", handleSubmit)



