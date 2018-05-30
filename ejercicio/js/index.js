
console.log('inicio ejercicio');

console.log('1. pedido nombre');

var nameAsked = prompt('Ingrese su nombre');

console.log('Hola ' + nameAsked + '!');

console.log('2. resultado primera suma');

var num1 = 3;

var numAsked1 = prompt('Ingrese un numero');

var parsedNumAsked = parseFloat(numAsked1, 10);

var resultSum1 = num1 + parsedNumAsked;

console.log(resultSum1);

console.log('3. resultado primera resta');

var num3 = 4;

var numAsked2 = prompt('Ingrese otro numero');

var parsedNumAsked2 = parseFloat(numAsked2, 10);

var resultRest = num3 - parsedNumAsked2;

console.log(resultRest);

console.log('4. resultado suma 2 numeros prompt');

var numAsked3 = prompt('Ingrese otro numero');

var NumAsked4 = prompt('Y si, otro numero por favor');

var parsednumAsked3 = parseFloat(numAsked3,10);

var parsednumAsked4 = parseFloat(NumAsked4,10);

var resultSumPrompts = parsednumAsked3 + parsednumAsked4;

console.log(resultSumPrompts);

console.log('fin ejercicio');