// no hay error
let message = "hola"; //string
message = 123456; //numérico




// Hay ocho tipos de datos básicos en JavaScript.

Number

let n = 123;
n = 12.345;

// El tipo number representa tanto números enteros como de punto flotante.

// Hay muchas operaciones para números. Por ejemplo, multiplicación *, 
// división /, suma +, resta -, y demás.

// Además de los números comunes, existen los llamados “valores 
// numéricos especiales” que también pertenecen a este tipo de datos: 
// Infinity, -Infinity y NaN.





// Infinity representa el Infinito matemático ∞. Es un valor especial 
// que es mayor que cualquier número.

alert( 1 / 0 ); // Infinity

// O simplemente hacer referencia a él directamente:

alert( Infinity ); // Infinity


// NaN representa un error de cálculo. Es el resultado de una 
// operación matemática incorrecta o indefinida, por ejemplo:

alert( "no es un número" / 2 ); // NaN, tal división es errónea


// NaN es “pegajoso”. Cualquier otra operación sobre NaN devuelve NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// Por lo tanto, si hay un NaN en alguna parte de una expresión 
// matemática, se propaga a todo el resultado (con una única 
// excepción: NaN ** 0 es 1).

// Las operaciones matemáticas son seguras

// Hacer matemáticas es “seguro” en JavaScript. Podemos hacer 
// cualquier cosa: dividir por cero, tratar las cadenas no 
// numéricas como números, etc.

// El script nunca se detendrá con un error fatal (y “morir”). 
// En el peor de los casos, obtendremos NaN como resultado.











BigInt

// En JavaScript, el tipo “number” no puede representar de forma 
// segura valores enteros mayores que (253-1) (eso es 9007199254740991),
// o menor que -(253-1) para negativos.


// Para ser realmente precisos, el tipo de dato “number” puede almacenar 
// enteros muy grandes (hasta 1.7976931348623157 * 10308), pero fuera 
// del rango de enteros seguros ±(253-1) habrá un error de precisión,
// porque no todos los dígitos caben en el almacén fijo de 64-bit. Así 
// que es posible que se almacene un valor “aproximado”.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// BigInt se agregó recientemente al lenguaje para representar enteros 
// de longitud arbitraria.

// Un valor BigInt se crea agregando n al final de un entero:

// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;






















String

// Un string en JavaScript es una cadena de caracteres y debe 
// colocarse entre comillas.

let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

// En JavaScript, hay 3 tipos de comillas.

//     Comillas dobles: "Hola".
//     Comillas simples: 'Hola'.
//     Backticks (comillas invertidas): `Hola`.


//Para meter variables dentro de expresiones, incrustar, se usan llaves

let name = "John";

// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3

// La expresión dentro de ${...} se evalúa y el resultado pasa a 
// formar parte de la cadena. Podemos poner cualquier cosa ahí 
// dentro: una variable como name, una expresión aritmética como 
// 1 + 2, o algo más complejo.


// Toma en cuenta que esto sólo se puede hacer con los backticks. 
// ¡Las otras comillas no tienen esta capacidad de incrustación!

alert( "el resultado es ${1 + 2}" ); // el resultado es ${1 + 2} (las comillas dobles no hacen nada)













// Boolean (tipo lógico)

// El tipo boolean tiene sólo dos valores posibles: true y false.

// Este tipo se utiliza comúnmente para almacenar 
// valores de sí/no: true significa “sí, correcto, verdadero”, 
// y false significa “no, incorrecto, falso”.

let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado

// Los valores booleanos también son el resultado de comparaciones:

let isGreater = 4 > 1;

alert( isGreater ); // verdadero (el resultado de la comparación es "sí")














null

// El valor “null” (nulo)

// El valor especial null no pertenece a ninguno de los tipos 
// descritos anteriormente.

// Forma un tipo propio separado que contiene sólo el valor null:

let age = null;

// En JavaScript, null no es una “referencia a un objeto inexistente” 
// o un “puntero nulo” como en otros lenguajes.



















undefined

// El valor “undefined” (indefinido)

// El valor especial undefined también se distingue. Hace un tipo 
// propio, igual que null.


let age_1;

alert(age_1); // muestra "undefined"

// Técnicamente, es posible asignar undefined a cualquier variable:

let age_2 = 100;

// cambiando el valor a undefined
age_2 = undefined;

alert(age_2); // "undefined"















Object 
y 
Symbol

// El tipo object (objeto) es especial.

// El tipo symbol (símbolo) se utiliza para crear identificadores 
// únicos para los objetos. Tenemos que mencionarlo aquí para una 
// mayor integridad, pero es mejor estudiar este tipo después de 
// los objetos.


typeof
// El operador typeof

// El operador typeof devuelve el tipo de dato del operando. Es 
// útil cuando queremos procesar valores de diferentes tipos de 
// forma diferente o simplemente queremos hacer una comprobación 
// rápida.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)






























// Resumen

// Hay 8 tipos básicos en JavaScript.

// Siete tipos de datos primitivos

//     -number para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(253-1).
    
//     -bigint para números enteros de longitud arbitraria.
    
//     -string para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo especial para un único carácter.
    
//     -boolean para verdadero y falso: true/false.
    
//     -null para valores desconocidos – un tipo independiente que tiene un solo valor nulo: null.
    
//     -undefined para valores no asignados – un tipo independiente que tiene un único valor “indefinido”: undefined.
    
//     -symbol para identificadores únicos.

// Y un tipo de dato no primitivo:
    
// -object para estructuras de datos complejas.


// El operador typeof nos permite ver qué tipo está almacenado en una variable.

//     Dos formas: typeof x o typeof(x).
//     Devuelve una cadena con el nombre del tipo. Por ejemplo "string".
//     Para null devuelve "object": esto es un error en el lenguaje, en realidad no es un objeto.


