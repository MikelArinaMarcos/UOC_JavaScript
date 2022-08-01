var num1 = prompt('Escribe el primer número:');
var num2 = prompt('Escribe el segundo número: ');
var oper = prompt('Escribe la operación a realizar: (+, -, *, /)');
var resultado;

switch(oper){
    case '+':
        resultado = +num1 + +num2;
        alert('El resultado de sumar ' + num1 + ' y ' + num2 + ' es: ' + resultado);
        break;
    case '-':
        resultado = +num1 - +num2;
        alert('El resultado de restar ' + num1 + ' y ' + num2 + ' es: ' + resultado);
        break;
    case '*':
        resultado = +num1 * +num2;
        alert('El resultado de multiplicar ' + num1 + ' y ' + num2 + ' es: ' + resultado);
        break;
    case '/':
        resultado = +num1 / +num2;
        alert('El resultado de dividir ' + num1 + ' y ' + num2 + ' es: ' + resultado);
        break;
}