const hello = document.getElementById('hello');

if (hello){
    hello.addEventListener('click', saluda);
}

const hola = document.getElementById('hola');

if(hola){
    hola.addEventListener('click', saluda);
}

function saluda(){
    alert('Hey!');
}