/*
  Funciones
  Las funciones son bloques de código que se pueden reutilizar
  en cualquier parte de nuestro programa.
*/

// Declaración de una función
function miFuncion() {
  console.log('Hola mundo');
}

// Llamado de una función
miFuncion(); //Hola mundo
miFuncion(); //Hola mundo

// Funciones con parámetros
function saludar(nombre = 'Desconocido') {
  console.log('Hola ' + nombre);
}

saludar('Juan'); //Juan
saludar('Carlos'); //Carlos
saludar(); //Desconocido

function sumar(a = 0, b = 0, c = 0) {
  console.log(a + b + c);
}

sumar(5, 3); //8
sumar(0, 20); //20

// Funciones que retornan un valor
function sumar_con_retorno(a, b) {
  return a + b;
}
console.log(sumar(5, 3));
//console.log(undefined)
console.log(sumar_con_retorno(5, 3));
//console.log(8)

/*
  Otros ejemplos
*/
var sumatoria = sumar(5,5)
console.log(sumatoria)
sumatoria = sumar_con_retorno(12,'5')
console.log(sumatoria)

/*
  Scope (Alcance)
  El scope es el alcance que tienen las variables en JavaScript.
*/

// Variables globales
var nombre = 'Juan';
// Variables locales
let apellido = 'Perez';
// Constantes (Locales)
const PI = 3.1416;

if(true) {
  //var apellido = 'Gomez';
}
console.log(apellido);

if(true){
  let saludo = 'Hola';
  if(true){
    console.log(saludo);
  }
}

/*
  Hoisting
  El hoisting es un comportamiento de JavaScript que mueve las declaraciones
  al inicio de su contexto.
*/
console.log(miNombre);
var miNombre = 'Juan';


//1) Crea una funcion que reciba un nombre y lo salude por su nombre (En consola)

function saludo(nombre) {
    console.log('Hola ' + nombre + ', ¿Cómo estás?');
}
saludo('Juan');

//2) Crea una funcion que sirva como una calculadora y reciba dos numeros y una operacion y retorne el resultado y posteriormente imprima el resultado

function calculadora(x, oper, y) {
    if (oper === '+') {
        return x + y;
    } else if (oper === '-') {
        return x - y;
    } else if (oper === '*') {
        return x * y;
    } else if (oper === '/') {
        return x / y;
    }
    
}
console.log(calculadora(10, '*', 6));

//3) Crea una funcion que te permita calcular el area de un cuadrado

function areaCuadrado(lado) {
    let area = lado**2;
    console.log(area);
}
areaCuadrado(8);

//4) Crea una funcion que te permita calcular el area de un triangulo

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    console.log(area);
}
areaTriangulo(4, 7);

//5) Crea una funcion que te permita calcular la hipotenusa de un triangulo

function hipotenusa(a, b) {
    let c = Math.sqrt((a**2) + (b**2));
    console.log(c);
}
hipotenusa(3, 5);

//6) Crea una funcion que imprima la sucesion de fibonacci hasta un numero determinado por parametro

function sucesionFibonacci(limite) {
    let sucesion = [0, 1], n = 0, resultado = 0;
    while (resultado < limite) {
        resultado = sucesion[n] + sucesion[n+1];
        sucesion.push(resultado);
        n++;
    }
    console.log(sucesion);
}
sucesionFibonacci(600);

//Recursividad
/*
  La recursividad es un concepto en programación donde una función se llama a sí misma
  para resolver un problema.
*/

function fibonacci_recursivo(limite, previo1 = 1, previo2 = 0, sucesion = 0){
  sucesion = previo1 + previo2;
  previo2 = previo1;
  previo1 = sucesion;
  if(sucesion <= limite){
    console.log(sucesion);
    fibonacci_recursivo(limite, previo1, previo2, sucesion);
  }
}

fibonacci_recursivo(10);

/*
  Ejercicios de recursividad
  1) Crea una función que calcule la potencia de un número

  function elevar(base, exponente, contador=1, valor_base = 0){
    let resultado = 0
    if(contador == 1){
      valor_base = base
    }
    console.log(base, exponente, contador, valor_base)
    if(contador < exponente){
      resultado = base * valor_base;
      console.log(resultado);
      contador++;
      elevar(resultado,exponente, contador, valor_base);
    }
  }

  elevar(2,3);
*/

function potencia(base, exponente, n = 1) {
  let valorBase = 0;
  let resultado = 0;
  if (n == 1) {
    valorBase = base;
  }
  if (n <= exponente) {
    resultado = base * valorBase;
    console.log(resultado);
    n++;
    potencia(valorBase, exponente, resultado, n);
  }
}
potencia(2, 3);

/*
  Metodos de strings
  Los strings son cadenas de texto y en JavaScript tienen varios métodos
*/
let texto = 'Hola mundo';
// Longitud de un string
console.log(texto.length);
// Convertir a mayúsculas
console.log(texto.toUpperCase());
// Convertir a minúsculas
console.log(texto.toLowerCase());
// Obtener un caracter de un string
console.log(texto.charAt(4));
// Cortar un string (El primer parametro es el inicio y el segundo es el fin)
console.log(texto.slice(0,4));
// Reemplazar un texto por otro
console.log(texto.replace('mundo','Juan'));
// Buscar un texto en un string
console.log(texto.indexOf('mundo'));
// Remplazar todas las ocurrencias de un texto
console.log(texto.replaceAll('o','a'));
// Verificar si un string termina con un texto
console.log("hola".endsWith("ola"));

/*
  Ejercicios de recursividad y metodos de strings
  1) Crea una función que reciba una palabra y la imprima al revés (Letra por letra)
  Opcional: Verificar si la palabra es un palíndromo

  let palabra = 'Oso';
  function invertir_palabra(palabra, contador = 1, palabra_invertida = ''){
    if(contador <= palabra.length){
      console.log(palabra.charAt(palabra.length - contador));
      palabra_invertida += palabra.charAt(palabra.length - contador);
      console.log('Palabra invertida:' + palabra_invertida);
      if(palabra.toLowerCase() == palabra_invertida.toLowerCase()){
        console.log('Es un palindromo');
      }
      contador++;
      invertir_palabra(palabra, contador, palabra_invertida);
    }
  }

  invertir_palabra(palabra);
*/

function palabra_al_reves(palabra, n = 1, posicionLetra = 0, polindromo = false) {
  let longitud = palabra.length;
  palabra = palabra.toLowerCase();
  if (n <= longitud){
    posicionLetra = longitud - n;
    console.log(palabra.charAt(posicionLetra));
    if (palabra.charAt(posicionLetra) == palabra.charAt(n-1)) {
      polindromo = true;
    } else {
      polindromo = false;
    }
    n++;
    palabra_al_reves(palabra, n, longitud, posicionLetra, polindromo);
  }
  if (polindromo == true && n == longitud) {
    console.log('la palabra ' + palabra + ' se escribe igual al derecho y al reves');
  }
}
palabra_al_reves('Arenera');

/*
  Arrays y los metodos de array
  Los arrays son listas de elementos y en JavaScript tienen varios métodos
*/
let frutas = ['Manzana','Pera','Uva','Sandia'];
// Longitud de un array
console.log(frutas.length);
// Agregar un elemento al final del array
frutas.push('Fresa');
console.log(frutas);
// Eliminar el ultimo elemento del array
frutas.pop();
console.log(frutas);
// Agregar un elemento al inicio del array
frutas.unshift('Fresa');
console.log(frutas);
// Eliminar el primer elemento del array
frutas.shift();
console.log(frutas);
// Obtener un subarray de un array
console.log(frutas.slice(1,3));
// Reemplazar un elemento de un array
frutas[1] = 'Mango';
console.log(frutas);
// Encontrar el indice de un elemento de un array
console.log(frutas.indexOf('Mango'));
// Eliminar elementos de un array
frutas.splice(1,2);
console.log(frutas);
// Unir dos arrays
let frutas2 = ['Pera','Uva'];
//console.log(frutas.concat(frutas2));
frutas = frutas.concat(frutas2);
console.log(frutas);
// Invertir un array
console.log(frutas.reverse());
// Ordenar un array
console.log(frutas.sort());

/*
  Ejercicios de arrays
  1) Crea una función que reciba un array de numeros y los sume
  2) Crea una función que reciba un array de numeros y devuelva el mayor
  3) Crea una funcion que reciba dos arrays y compare si son iguales
*/

//ejercicio 1
let array1 = [2, 3, 5];
function suma_array(array, suma = 0, contador = 0)  {
  if (contador < array.length) {
    suma += array[contador];
    contador++;
    if (contador == array.length) {
      console.log(suma);
    }
    suma_array(array, suma, contador);
  }
}
suma_array(array1);


//ejercicio 2
let array2 = [5, 2, 7];
function mayor_array(array, mayor = 0, contador = 0) {
  if (contador < array.length) {
    if (array[contador] > mayor) {
      mayor = array[contador];
      contador++;
      if (contador == array.length) {
        console.log('El mayor es ' + mayor);
      }
      mayor_array(array, mayor, contador);
    } else {
      contador++;
      if (contador == array.length) {
        console.log('El mayor es ' + mayor);
      }
      mayor_array(array, mayor, contador);
    }
  }
}
mayor_array(array2);

//ejercicio 3
let array3 = [3, 5, 7];
let array4 = [3, 6, 7];
function comparar_arrays(array3, array4, contador = 0, iguales = false) {
  if (array3.length == array4.length) {
    if (array3[contador] == array4[contador] && contador < array3.length) {
      iguales = true;
      contador++;
      if(iguales == true && contador == array3.length) {
        console.log('Son iguales');
      }
      comparar_arrays(array3, array4, contador, iguales);
    } else if (array3[contador] != array4[contador]) {
      console.log('No son iguales');
    }
  } else {
    console.log('No son iguales');
  }
}
comparar_arrays(array3, array4);

/*
  Objetos
  Los objetos son colecciones de propiedades y métodos.
  Propiedades: Son variables dentro del objeto. (Cosas que lo describen)
  Métodos: Son funciones dentro del objeto. (Cosas que puede hacer)
*/

let persona = {
  nombre: 'Juan',
  edad: 25,
  saludar: function(mensaje){
    console.log(`${this.nombre} dice: ${mensaje}`);
  }
}

console.log(persona.nombre);
console.log(persona.edad);
persona.saludar("Hola mundo");
persona.saludar("Hey!");

/*
  Funciones anonimas
  Las funciones anonimas son funciones sin nombre.
*/

let sumar_anonimo = function(a,b){
  return a + b;
}

console.log(sumar_anonimo(5,5));

// Loops (Ciclos)
/*
  Los loops son estructuras de control que nos permiten repetir
  un bloque de código varias veces.
*/
// For
let videojuegos = ['Mario','Zelda','Metroid','Pokemon'];
for(let i = 0; i < videojuegos.length; i++){
  console.log(videojuegos[i]);
}
// For of
/*
  El for of es una forma más sencilla de recorrer un array
*/
let cadena = 'Hola mundo';
for(let letra of cadena){
  console.log(letra);
}
// For in
/*
  El for in es una forma de recorrer un objeto
*/
let persona2 = {
  nombre: 'Juan',
  edad: 25,
  sexo: 'Masculino'
}
let contador = 0;
for(let propiedad in persona2){
  console.log(`${propiedad}: ${persona2[propiedad]}`);
  contador++;
  if(contador == 2){
    break;
  }
}
// While
let contador2 = 0;
while(contador2 <= 10){
  console.log(contador2);
  contador2+=2;
}

// Do while
let contador3 = 0;
do {
  console.log(contador3);
  contador3++;
} while(contador3 <= 10);


/*
  Ejericios de loops, objetos y arrays
  1) Crea una función que reciba un objeto e imprima todas sus propiedades y valores
  pero debe detenerse si encuentra la propiedad 'edad'
  2) Crea una función que reciba un array de objetos y los imprima
  3) Dado el siguiente array de objetos
  let personas = [
    {nombre: 'Juan', edad: 25, habilidades: ['Programación','Cocina']},
    {nombre: 'Carlos', edad: 30, habilidades: ['Diseño','Enseñanza']},
    {nombre: 'Ana', edad: 20, habilidades: ['Diseño','Cocina']}
  ];
  Crea una funcion que reciba el array de objetos e imprima cada una de sus nombres,
  edades y habilidades
*/

//Ejercicio 1
let persona3 = {
  nombre: 'Juan',
  edad: 25,
  sexo: 'Masculino'
}
function imprimir_objeto(objeto) {
  for(let propiedad in objeto){
    if (propiedad == 'edad') {
      break;
    }
    console.log(`${propiedad}: ${objeto[propiedad]}`);
  }
}
imprimir_objeto(persona3);

//Ejercicio 2
let mascotas = [
  {nombre: 'Bolt', animal: 'Perro', alimento: 'Perrarina'},
  {nombre: 'Pelusa', animal: 'Gato', alimento: 'Gatarina'},
  {nombre: 'Judy', animal: 'Conejo', alimento: 'Conejarina'},
  {nombre: 'Samy', animal: 'Tortuga', alimento: 'Vegetales'},
  {nombre: 'Blue', animal: 'Periquito', alimento: 'Alpiste'}
];
function array_mascotas(array) {
  for(let i = 0; i < array.length; i++){
    for(let propiedad in array[i]){
      console.log(`${propiedad}: ${array[i][propiedad]}`);
    }
  }
}
array_mascotas(mascotas);

//Ejercicio 3
let personas = [
  {nombre: 'Juan', edad: 25, habilidades: ['Programación','Cocina']},
  {nombre: 'Carlos', edad: 30, habilidades: ['Diseño','Enseñanza']},
  {nombre: 'Ana', edad: 20, habilidades: ['Diseño','Cocina']}
];
function array_personas(array) {
  for(let i = 0; i < array.length; i++){
    for(let propiedad in array[i]){
      if (propiedad == 'habilidades') {
        for(let j = 0; j < array[i][propiedad].length; j++) {
          console.log(`${propiedad}: ${array[i][propiedad][j]}`);
        }
      } else {
        console.log(`${propiedad}: ${array[i][propiedad]}`);
      }
    }
  }
}
array_personas(personas);


/*
  Proyectos de la sección
  1) Utiliza programación orientada a objetos para crear un juego de peleas
  donde existan dos personajes y se peleen entre ellos hasta que uno de los dos
  se quede sin vida (por turnos).
  
  un personaje tiene nombre, vida y ataque, defensa
  
  Cada turno se debe imprimir el daño que se le hace al personaje y la vida que le queda
  a cada uno. Al final se debe imprimir el ganador.

  Los personajes deben tener un metodo que les permita atacar a otro personaje
  y un metodo que les permita defenderse.

  Deben ejecutar uno de los dos metodos de forma aleatoria.
  Y quien ataca o defiende primero debe ser aleatorio.

  La defensa lo que hace es sumar +3 de vida al personaje que se defiende

  el ataque debe ser debe tener un porcentaje aleatorio de quitar el 100% del ataque
  del personaje que ataca

  2) Crea un programa que te permita jugar piedra, papel o tijera contra la computadora
  en programación orientada a objetos, guardar un historial de victorias y derrotas
*/