
// Variables en General

/*

console.log('init app');

var fullName;

console.log('Hola 0 ' + fullName); // tira undefined porque no tiene valor asignado

fullName = 'Javier de la Barrera';

console.log('Hola 1 ' + fullName);

fullName = 'Marcela Etc';

console.log('Hola 2 ' + fullName);

fullName = 2;

console.log('Hola 3 ' + fullName);

var box = 'Soy una caja';

console.log(box);

*/


// Boolean

// var value1 = false;

// var value2 = true;

// Number

// var number1 = 2;

// var number2 = -5;

// var pi = 3.1416;

// String

// var fullName = 'Javier de la Barrera';

// var text = 'Lorem ipsum loverum zaraza etc';

// var message = 'Hola "Pedro"';

// var message2 = "Hola 'Pedro'";

// null / undefined

// var undefinedValue = undefined; // esto no tiene mucha logica, ya que viene por defecto

// var nullValue = null; // este hace más sentido, ya que no viene por defecto; se usa mucho en React

// Array

// var examsResults = [10, 9, 8, 5];

// examsResults[3] = 8;

// console.log(examsResults[3]);

// var arrayAnyValue = [2, 'Ad', false, [1,2,3,4] ];

// Object

// var age = 35;

// var student = {
//     name: 'Javier',
//     lastName: 'de la Barrera',
//     age: age
// }

// console.log(student['name']);

// student.name = 'Carlos';

// console.log(student.name);
// console.log(student.age);

// Operados Aritmeticos

// var value1 = 2;

// var value2 = '4';

// var value3 = '4.8';

// var parsedValue2 = parseInt(value2, 10);
// var parsedValue3 = parseFloat(value3, 10);

// var resultSum = value1 + value2;
// var resultSum = value1 + parsedValue2;
// var resultSum = value1 + parsedValue3;

// console.log(resultSum);

// *

// /

// var resultDiv = value1 / parsedValue2;

// console.log(resultDiv);

// Web API's y funciones de alto nivel utiles

// var value;

// value = prompt('Decime un numero');

// console.log(value); // siempre lo transforma a string; siempre hay que parsearlo si queremos operar con el numero!

console.log('1. pedido nombre');

var name = prompt('Ingrese su nombre');

console.log('Hola ' + name + '!');

console.log('2. resultado primera suma');

var num1 = 3;

var num2 = prompt('Ingrese un numero');

var parsedNum2 = parseFloat(num2, 10);

var resultSum1 = num1 + parsedNum2;

console.log(resultSum1);

console.log('3. resultado primera resta');

var num3 = 4;

var num4 = prompt('Ingrese otro numero');

var parsedNum4 = parseFloat(num4, 10);

var resultRest = num3 - parsedNum4;

console.log(resultRest);

console.log('4. resultado suma 2 numeros prompt');

var num5 = prompt('Ingrese otro numero');

var num6 = prompt('Y si, otro numero por favor');

var parsedNum5 = parseFloat(num5,10);

var parsedNum6 = parseFloat(num6,10);

var resultSumPrompts = parsedNum5 + parsedNum6;

console.log(resultSumPrompts);