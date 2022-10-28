const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("#textarea");

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch", 
    "customError"
]
const mensajesDeError = {
    nombre: {
        valueMissing: "El nombre no puede estar vacio"
    },
    email: {
        valueMissing: "este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El asunto no puede estar vacio"
    }
}

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje
}