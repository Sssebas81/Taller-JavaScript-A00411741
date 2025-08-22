console.log("--------------1. Tipos de Variables (var, let, const)--------------");
//Ejercicio 1.1: Declara una variable nombre con var, asígnale tu nombre y luego reasigna un nuevo nombre. Muestra ambos en consola.

var nombre="Juan";
console.log("Primer Nombre:" , nombre);
nombre="Sebastian";
console.log("Segundo Nombre:" , nombre);

//Ejercicio 1.2: Intenta hacer lo mismo pero con const y explica por qué falló.

try {
    const nombreConst = "Juan";
    console.log("Constante:", nombreConst);
    nombreConst = "Sebastian";
} catch (error) {
    console.log("Error con constante:", error.message);
    console.log("No se puede reasignar una variable declarada con const.");
}

//Ejercicio 1.3: Declara una variable edad con let dentro de un bloque if (sin que se cumpla la condición) y luego intenta acceder a ella fuera del bloque. Explica el resultado.

if (false) {
    let edad = 20;
}
try {
    console.log(edad); 
} catch (error) {
    console.log("Error:", "No se puede acceder a 'edad' fuera del bloque porque fue declarada con let.");
}

console.log("--------------Tipos de Datos (Primitivos y Complejos)--------------");

//Ejercicio 2.1: Declara una variable para cada uno de los siguientes tipos de datos primitivos: string, number, boolean, null y undefined. Usa typeof para verificar el tipo de cada una.

let texto = "Kendrick Lamar";
let numero = 18;
let boolean = true;
let nulo = null;
let indefinido;

console.log(typeof texto, typeof numero, typeof boolean, typeof nulo, typeof indefinido);

//Ejercicio 2.2: Declara un objeto persona con propiedades nombre y edad, y un array hobbies con tres elementos. ¿Qué tipo de dato son el objeto y el array?

let persona = { nombre: "Juan", edad: 18 };
let hobbies = ["Ir al gym", "jugar videojuegos", "diseñar"];

console.log("Tipo de persona:", typeof persona);
console.log("Tipo de hobbies:", typeof hobbies);

console.log("--------------Conversión de Tipos (Implícita y Explícita)--------------");

//Ejercicio 3.1 (Implícita):
//Crea una variable numero1 = 10 (number) y numero2 = "5" (string).
//Muestra el resultado de numero1 + numero2. ¿Qué sucedió?
//Muestra el resultado de numero1 * numero2. ¿Qué sucedió ahora?

let numero1 = 10;
let numero2 = "5";
console.log("numero1 + numero2:", numero1 + numero2); // concatenación
console.log("numero1 * numero2:", numero1 * numero2); // multiplicación numérica

//Ejercicio 3.2 (Explícita):
//Usa String() para convertir el número 25 a un string.
//Usa Number() para convertir el string "100" a un número.
//Usa Boolean() para convertir el string vacío "" y el string "hola" a booleanos.

console.log(String(25));
console.log(Number("100"));
console.log(Boolean(""), Boolean("hola"));

console.log("--------------Operadores, Condicionales, Ciclos y Excepciones--------------");

//Ejercicio 4.1: Usa operadores de comparación para verificar si 10 === "10" y 10 == "10". Explica la diferencia.
console.log("10 === '10':", 10 === "10"); 
console.log("10 == '10':", 10 == "10"); 

//Ejercicio 4.2: Crea un if/else que verifique si una variable numero es par o impar. Usa el operador %.

let numeroprueba = 4;
if (numeroprueba % 2 === 0) {
    console.log(numeroprueba, "es par");
} else {
    console.log(numeroprueba, "es impar");
}

//Ejercicio 4.3: Usa un ciclo for para imprimir en la consola los números del 1 al 5.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Ejercicio 4.4: Usa un bloque try...catch para intentar ejecutar un código que genere un error (throw new Error("Este es un error.")) y captura el error para mostrar un mensaje amigable.

try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Error capturado:", error.message);
}

console.log("--------------Funciones y Arrow Functions--------------");

//Ejercicio 5.1: Escribe una función tradicional llamada multiplicar que reciba dos parámetros y retorne su producto. Llama a la función y muestra el resultado.

function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicar:", multiplicar(3, 4));

//Ejercicio 5.2: Convierte la función multiplicar del ejercicio anterior en una arrow function de una sola línea.

const multiplicarArrow = (a, b) => a * b;
console.log("Multiplicar con arrow:", multiplicarArrow(5, 6));

//Ejercicio 5.3: Escribe una arrow function llamada saludar que no reciba parámetros y retorne el texto "¡Hola a todos!".

const saludar = () => "¡Hola a todos!";
console.log(saludar());

console.log("-------------- Scope y Contextos --------------");

//Ejercicio 6.1: Declara una variable global en el ámbito global. Luego, dentro de una función, declara una variable local. Intenta acceder a ambas variables dentro y fuera de la función, y explica qué funciona y qué no.

let VariableGlobal = "Soy global";
function testScope() {
    let VariableLocal = "Soy local";
    console.log(VariableGlobal); 
    console.log(VariableLocal);  
}

testScope();
console.log(VariableGlobal);
// console.log(localVar); // Error: no definida fuera de la función

//Ejercicio 6.2: Crea un objeto coche con una propiedad marca y un método mostrarMarca que use this. Llama al método y explica qué representa this.

let coche = {
    marca: "Nissan",
    mostrarMarca: function() {
        console.log("La marca es:", this.marca);
    }
};
coche.mostrarMarca();

console.log("-------------- Arrays --------------");

//Ejercicio 7.1 (Mutables):
//Crea un array frutas = ["Manzana", "Banana"].
//Usa push() para agregar "Naranja" y pop() para eliminar el último elemento. Muestra el array en cada paso.

let frutas = ["Manzana", "Banana"];
console.log("Inicial:", frutas);
frutas.push("Naranja");
console.log("Después de push:", frutas);
frutas.pop();
console.log("Después de pop:", frutas);

//Ejercicio 7.2 (Inmutables):
//Crea un array numeros = [1, 2, 3].
//Usa map() para crear un nuevo array con cada número multiplicado por 2.
//Usa filter() para crear un nuevo array con solo los números mayores a 1.

let numeros = [1, 2, 3];
let numerosPor2 = numeros.map(n => n * 2);
let mayoresA1 = numeros.filter(n => n > 1);
console.log("Multiplicados por 2:", numerosPor2);
console.log("Mayores a 1:", mayoresA1);

//Ejercicio 7.3 (Iteración):
//Usa forEach() para iterar sobre el array frutas y mostrar cada fruta en la consola.
//Usa find() para encontrar la fruta que sea "Banana".
//Usa findIndex() para encontrar el índice de la fruta "Manzana".

frutas.forEach(f => console.log("Fruta:", f));
console.log("Encontrar Banana:", frutas.find(f => f === "Banana"));
console.log("Índice de Manzana:", frutas.findIndex(f => f === "Manzana"));

console.log("--------------  Objetos y Clases --------------");

//Ejercicio 8.1 (Métodos en Objetos):
//Crea un objeto libro con propiedades titulo y autor.
//Añade un método mostrarInfo que use this para imprimir la información del libro.

let libro = {
    titulo: "El Asesinato en el Orient Express",
    autor: "Agatha Cristie",
    mostrarInfo: function() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
};
libro.mostrarInfo();

//Ejercicio 8.2 (Clases):
//Crea una clase llamada Animal con un constructor que reciba un nombre.
//Agrega un método saludar que retorne un saludo usando el nombre.
//Crea una instancia de la clase y llama al método saludar.

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
let animal1 = new Animal("Jhon Jairo");
console.log(animal1.saludar());

//Ejercicio 8.3 (Herencia de Clases):
//Crea una clase Perro que herede de Animal.
//Añade una propiedad raza al constructor de Perro y usa super() para llamar al constructor de la clase padre.
//Crea una instancia de Perro y muestra su saludo.

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
let perro1 = new Perro("Jhon Jairo", "Pincher");
console.log(perro1.saludar(), "y soy un", perro1.raza);









