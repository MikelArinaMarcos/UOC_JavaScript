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
function resta(){
    var a = prompt('Escribe el primer número: ');
    var b = prompt('Escribe el segundo número: ');
    var c = +a - +b;
    alert('El resultado de restar ' + a + ' y ' + b + ' es: ' + c);
}
function multiplicacion(){
    var a = prompt('Escribe el primer número: ');
    var b = prompt('Escribe el segundo número: ');
    var c = +a * +b;
    alert('El resultado de multiplicar ' + a + ' y ' + b + ' es: ' + c);
}
function division(){
    var a = prompt('Escribe el primer número: ');
    var b = prompt('Escribe el segundo número: ');
    var c = +a / +b;
    alert('El resultado de dividir ' + a + ' y ' + b + ' es: ' + c);
}
function modulo(){
    var a = prompt('Escribe un número: ');
    if(+a % 2 == 0){
        alert('El número ' + a + ' es par.');
    }
    else{
        alert('El número ' + a + ' es impar.');
    }
}

mySumaBtn.addEventListener('click',suma);
myRestaBtn.addEventListener('click',resta);
myMultBtn.addEventListener('click',multiplicacion);
myDivBtn.addEventListener('click',division);
myModBtn.addEventListener('click',modulo);