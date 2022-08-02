console.log('Hola JS!');

function muestra_texto(){
    console.log('Mi primera función');
}

muestra_texto();

function muestra_texto_param(texto){
    console.log('El texto recibido es: ' + texto);
}

muestra_texto_param('Hola');

const myBtnSaluda = document.getElementById('btn_saludo');
console.log(myBtnSaluda);
myBtnSaluda.addEventListener('click', function(){
    alert('Hola!');
})

const myBtnPregunta = document.getElementById('btn_pregunta');
console.log(myBtnPregunta);
myBtnPregunta.addEventListener('click', pideNombre)

function pideNombre(){
    prompt('Hola, ¿quién eres?');
}