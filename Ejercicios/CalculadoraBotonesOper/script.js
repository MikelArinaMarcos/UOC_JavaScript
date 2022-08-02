const mySumaBtn = document.getElementById('suma_btn');
const myRestaBtn = document.getElementById('resta_btn');
const myMultBtn = document.getElementById('multiplicacion_btn');
const myDivBtn = document.getElementById('division_btn');
const myModBtn = document.getElementById('modulo_btn');

function suma(){
    var a = prompt('Escribe el primer número: ');
    var b = prompt('Escribe el segundo número: ');
    var c = +a + +b;
    alert('El resultado de sumar ' + a + ' y ' + b + ' es: ' + c);
}

mySumaBtn.addEventListener('click',suma);