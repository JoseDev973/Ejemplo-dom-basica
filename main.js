const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',btnOnClick)

function btnOnClick (event ){
    event.preventDefault ()
    pResult.innerText = "El resultado es: " + input1.value + input2.value

}

