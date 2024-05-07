//Para generar una variable en JavaScript, se usa la palabra clave let.

let message;

message="Hola";  //la variable message alamacena "Hola"

alert(message) // muestra el contenido de la variable



//Para ser concisos, podemos combinar la declaración de la variable y su asignación en una sola línea:

let mensaje = 'Hola!'; // define la variable y asigna un valor

alert(mensaje); // Hola!


//También podemos declarar variables múltiples en una sola línea:

let user = 'John', age = 25, mensajito = 'Hola';


//La versión de líneas múltiples es un poco más larga, pero se lee más fácil:

let usuario = 'John';
let edad = 25;
let mensajote = 'Hola';

//Algunas personas también definen variables múltiples en estilo multilínea:

let users = 'John',
  ages = 25,
  messages = 'Hola';

//…Incluso en este estilo “coma primero”:

let user_1 = 'John'
  , age_1 = 25
  , message_1 = 'Hola';



//"En scripts más viejos, a veces se encuentra otra palabra clave: var en lugar de let:"ç

var mensaje_1 = 'Hola';


//También la podemos cambiar cuantas veces queramos:

let message_2;

message_2 = 'Hola!';

message_2 = 'Mundo!'; // valor alterado

alert(message); //Cuando el valor ha sido alterado, los datos antiguos serán removidos de la variable:


//También podemos declarar dos variables y copiar datos de una a la otra.

let hello_3 = 'Hola mundo!';

let message_3;

// copia 'Hola mundo' de hello a message
message_3 = hello_3;

// Ahora, ambas variables contienen los mismos datos
alert(hello_3); // Hola mundo!
alert(message_3); // Hola mundo!

//Declarar dos veces lanza un error










//Nombramiento de variables

// El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y _.
// El primer carácter no puede ser un dígito.

let userName;
let test123;










// Cuando el nombre contiene varias palabras, se 
// suele usar el estilo camelCase (capitalización en camello), 
// donde las palabras van pegadas una detrás de otra, con cada 
// inicial en mayúscula: miNombreMuyLargo.

let $ = 1; // Declara una variable con el nombre "$"
let _ = 2; // y ahora una variable con el nombre "_"

alert($ + _); // 3

// Es interesante notar que el símbolo del dólar '$' y el guion 
// bajo '_' también se utilizan en nombres. Son símbolos comunes, 
// tal como las letras, sin ningún significado especial.











//Ejemplos de nombres incorrectos:

let 1a; // no puede iniciar con un dígito

let my-name; // los guiones '-' no son permitidos en nombres


// La Capitalización es IMPORTANTE

// Dos variables con nombres manzana y MANZANA son variables distintas.








// // Las letras que no son del alfabeto inglés están permitidas, 
// pero no se recomiendan

// // Es posible utilizar letras de cualquier alfabeto, 
// incluyendo letras del cirílico, logogramas chinos, etc.:

let имя = '...';
let 我 = '...';

// Técnicamente, no existe ningún error aquí. Tales nombres 
// están permitidos, pero existe una tradición internacional 
// de utilizar inglés en el nombramiento de variables. Incluso 
// si estamos escribiendo un script pequeño, este puede tener 
// una larga vida por delante. Puede ser necesario que gente de 
// otros países deba leerlo en algún momento.








// Nombres reservados

let let = 5; // no se puede le nombrar "let" a una variable  ¡Error!
let return = 5; // tampoco se le puede nombrar "return", ¡Error!

// Hay una lista de palabras reservadas, las cuales no pueden ser utilizadas como nombre de variable porque el lenguaje en sí las utiliza.

// Por ejemplo: let, class, return, y function están reservadas.

// El siguiente código nos da un error de sintaxis:











// Una asignación sin utilizar use strict

// Normalmente, debemos definir una variable antes de utilizarla. 
// Pero, en los viejos tiempos, era técnicamente posible crear una 
// variable simplemente asignando un valor sin utilizar ‘let’. Esto 
// aún funciona si no ponemos ‘use strict’ en nuestros scripts para
//  mantener la compatibilidad con scripts antiguos.

// nota: no se utiliza "use strict" en este ejemplo

num = 5; // se crea la variable "num" si no existe antes

alert(num); // 5

// Esto es una mala práctica que causaría errores en ‘strict mode’:

"use strict";

num = 5; // error: num no está definida











// Para declarar una variable constante (inmutable) use 
// const en vez de let:

const myBirthday = '18.04.1982';

// Las variables declaradas utilizando const se 
// llaman “constantes”. No pueden ser alteradas. 
// Al intentarlo causaría un error:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!
















// Existe una práctica utilizada ampliamente de utilizar 
// constantes como aliases de valores difíciles-de-recordar 
// y que se conocen previo a la ejecución.

// Tales constantes se nombran utilizando letras 
// mayúsculas y guiones bajos.

// Por ejemplo, creemos constantes para los colores en el 
// formato “web” (hexadecimal):

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


// Ventajas:

//     COLOR_ORANGE es mucho más fácil de recordar que "#FF7F00".

//     Es mucho más fácil escribir mal "#FF7F00" que COLOR_ORANGE.

//     Al leer el código, COLOR_ORANGE tiene 
//     mucho más significado que #FF7F00.




// Ser una “constante” solo significa que el valor de la variable nunca cambia. 
// Pero hay constantes que son conocidas previo a la ejecución (como el valor 
// hexadecimal del color rojo) y hay constantes que son calculadas en el 
// tiempo de ejecución, pero no cambian después de su asignación inicial.


const pageLoadTime = /* el tiempo que tardó la página web para cargar */;







// Nombrar cosas correctamente

// Una variable debe tener un nombre claro, de significado evidente,
// que describa el dato que almacena.









// Algunas reglas buenas para seguir:

//     -Use términos legibles para humanos como userName p shoppingCart.

//     -Evite abreviaciones o nombres cortos a, b, c, al menos que en serio sepa lo que está haciendo.

//     -Cree nombres que describen al máximo lo que son y sean concisos. 
//      Ejemplos que no son adecuados son data y value. Estos nombres no nos dicen
//      nada. Estos solo está bien usarlos en el contexto de un código que deje 
//      excepcionalmente obvio cuál valor o cuales datos está referenciando la
//      variable.

//     -Acuerda en tu propia mente y con tu equipo cuáles términos se 
//      utilizarán. Si a un visitante se le llamara “user”, debemos llamar las 
//      variables relacionadas currentUser o newUser en vez de currentVisitor o 
//      newManInTown.




// Resumen

// Podemos declarar variables para almacenar datos al utilizar las palabra clave var, let, o const.

//     -let – es la forma moderna de declaración de una variable.
//     -var – es la declaración de variable de vieja escuela. Normalmente no lo utilizamos en absoluto. Cubriremos sus sutiles diferencias con let en el capítulo La vieja "var", por si lo necesitaras.
//     -const – es como let, pero el valor de la variable no puede ser alterado.






