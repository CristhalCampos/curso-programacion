console.log('Hola desde index.js');

// Comentario de una sola linea

/*
    Comentario de
    multiples lineas
*/

// Variables
/*
    Una variable es un espacio en memoria que se reserva para almacenar un valor
    y que puede ser modificado en cualquier momento
*/

// Declaracion de variables
var nombre = 'Juan';
console.log(nombre);

// Tipos de datos
/*
    Los tipos de datos son los diferentes formas en las que se pueden representar
    los valores en Javascript
*/

nombre = 'Carlos'; //String
console.log(nombre);

var edad = 25; //Number
var sueldo = 2500.50; //Number
console.log(edad + sueldo);

var tieneTrabajo = true; //Boolean
var tieneDinero = false; //Boolean
console.log(tieneTrabajo, tieneDinero);

var puestoDeTrabajo; //Undefined
console.log(puestoDeTrabajo);

var nulo = null; //Null
console.log(nulo);

//Objeto
var persona = {
    nombre: 'Juan',
    edad: 26,
    tieneTrabajo: true
};
console.log(persona, persona.nombre, persona.edad, persona.tieneTrabajo);

persona = {
    nombre: 'Juan',
    edad: 26,
    tieneTrabajo: true,
    mascota: {
        nombre: 'Firulais',
        edad: 3,
        tipo: 'Perro'
    }
};
//Acceder al nombre de la mascota
console.log(persona.mascota.nombre);

//Un personaje de videojuego
var personaje = {
    nombre: 'Mario',
    vida: 100,

}

// Arreglos (Arrays)
var frutas = ['Manzana', 'Pera', 'Uva', 'Sandia'];
console.log(frutas);
console.log(frutas[0]); //Manzana
console.log(frutas[4]); //Undefined

var compras = [
    ['Manzana', 2],
    ['Pera', 3],
    ['Uva', 1],
    ['Sandia', 1],
    [{nombre: 'Papaya', precio: 50}, 2]
]
console.log(compras[1][0]); //Pera
//console.log(compras[4][0].nombre); //Papaya
console.log(compras[4][0]['nombre']); //Papaya

/*
    Ejercicios de tipos de datos
    Segun el siguien objeto

    var compras = {
        frutas: [
        {
            nombre: 'Manzana',
            tipos: ['Roja', 'Verde'],
            cantidad: 2,
            precio: 5
        },
        {
            nombre: 'Pera',
            cantidad: 3,
            precio: 6
        },
        {
            nombre: 'Uva',
            tipos: ['Verde', 'Morada'],
            cantidad: 1,
            precio: 10
        },
        {
            nombre: 'Sandia',
            cantidad: 1,
            precio: 20
            tamaños: ['Grande', 'Mediana', 'Pequeña']
        }
        ],
        charcuteria: [
        {
            nombre: 'Jamón',
            cantidad: 1,
            precio: 100
        },
        {
            nombre: 'Salchichón',
            cantidad: 2,
            precio: 50
        }
        ]
    }

    imprimir en consola:
    1. El nombre de la segunda fruta
    2. El precio de la uva
    3. El valor "Grande" de la sandia
    4. El nombre del segundo elemento de charcuteria

    opcional:
    1. El precio total de las frutas
    2. El precio total de la charcuteria
    3. El precio total de la compra
*/

var mercado = {
    frutas: [
    {
        nombre: 'Manzana',
        tipos: ['Roja', 'Verde'],
        cantidad: 2,
        precio: 5
    },
    {
        nombre: 'Pera',
        cantidad: 3,
        precio: 6
    },
    {
        nombre: 'Uva',
        tipos: ['Verde', 'Morada'],
        cantidad: 1,
        precio: 10
    },
    {
        nombre: 'Sandia',
        cantidad: 1,
        precio: 20,
        tamanos: ['Grande', 'Mediana', 'Pequeña']
    }
    ],
    charcuteria: [
    {
        nombre: 'Jamón',
        cantidad: 1,
        precio: 100
    },
    {
        nombre: 'Salchichón',
        cantidad: 2,
        precio: 50
    }
    ]
}

console.log(mercado.frutas[1].nombre); //Pera
console.log(mercado.frutas[2].precio); //10
console.log(mercado.frutas[3].tamanos[0]); //Grande
console.log(mercado.charcuteria[1].nombre); //Salchichon

var precioManzana = mercado.frutas[0].precio;
var precioPera = mercado.frutas[1].precio;
var precioUva = mercado.frutas[2].precio;
var precioSandia = mercado.frutas[3].precio;
var precioJamon = mercado.charcuteria[0].precio;
var precioSalchichon = mercado.charcuteria[1].precio;

var cantidadManzana = mercado.frutas[0].cantidad;
var cantidadPera = mercado.frutas[1].cantidad;
var cantidadUva = mercado.frutas[2].cantidad;
 
var totalFrutas = (precioManzana * 2) + (precioPera * 3) + precioUva + precioSandia;
var totalCharcuteria = precioJamon + (precioSalchichon * 2);

console.log(totalFrutas); //58
console.log(totalCharcuteria); //200
console.log(totalFrutas + totalCharcuteria); //258

//Operadores comparativos

/*
    Son utilizados para comparar dos valores
    y devolver un valor booleano
*/

var condicional = 5 > 3; //True
var condicional = 5 == '5'; //True
console.log(condicional);
var condicional = 5 === '5'; //False
console.log(condicional);
var condicional = 5 != '5'; //False
console.log(condicional);
var condicional = 5 !== '5'; //True
console.log(condicional);

/*
    > Mayor que
    < Menor que
    >= Mayor o igual que
    <= Menor o igual que
    == Igual que
    === Estrictamente igual que
    != Diferente que
    !== Estrictamente diferente que
*/

//Operadores logicos

/*
    Son utilizados para combinar dos o mas valores booleanos
    y devolver un valor booleano
*/

var este = 5 > 3 && 3 < 5;

/*
    && and (y)
    || or (o)
    ! not (no)
*/

//1 representa true
//0 representa false

//Operadores aritmeticos

var exponenciacion = 5 ** 3; //125
var residuo = 40 % 8; //0
//El residuo de un numero par entre un numero par es 0
//El residuo de un numero impar entre un numero par es 1
var incremento = 5;
incremento++ //6
incremento-- //5
var asignacion = 5;

/*
    + Suma
    - Resta
    * Multiplicacion
    ** Exponenciacion
    / Division
    % Modulo
    ++ Incremento
    -- Decremento
    = Asignacion
    =+ Suma y asignacion
    =- Resta y asignacion
    =* Multiplicacion y asignacion
    =/ Division y asignacion
    =% Modulo y asignacion
*/

//Condicionales

var condicion = 5 > 3;
if (condicion) {
    console.log('5 es mayor que 3');
} else {
    console.log('5 no es mayor que 3');
}

