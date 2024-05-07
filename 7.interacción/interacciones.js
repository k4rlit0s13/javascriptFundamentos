

alert //print alerta

// Ya la hemos visto. Muestra un mensaje y espera a que el 
// usuario presione “Aceptar”.


prompt  //imput alerta

// La función prompt acepta dos argumentos:

result = prompt(title, ["default"]);

// title
//     El texto a mostrar al usuario.
// default
//     Un segundo parámetro opcional, es el valor inicial del campo de entrada. 

// La llamada a prompt retorna el texto del 
// campo de entrada o null si la entrada fue cancelada.

let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!

//En IE: proporciónale un predeterminado siempre

let test = prompt("Test", ''); // <-- para IE(Internet Explorer)





confirm

// La sintaxis:

result = confirm(pregunta);

// La función confirm muestra una ventana modal con una 
// pregunta y dos botones: OK y CANCELAR.

// El resultado es true si se pulsa OK y false en caso contrario.

// Por ejemplo:

let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK
















// Resumen

// Cubrimos 3 funciones específicas del navegador para interactuar con los usuarios:

alert
//     muestra un mensaje.
prompt
//     muestra un mensaje pidiendo al usuario que introduzca un texto. Retorna el texto o, si se hace clic en CANCELAR o se presiona Esc, retorna null.
confirm
//     muestra un mensaje y espera a que el usuario pulse “OK” o “CANCELAR”. Retorna true si se presiona OK y false si se presiona CANCEL/Esc. 

// Todos estos métodos son modales: detienen la ejecución del script y no permiten que el usuario interactúe con el resto de la página hasta que la ventana se haya cerrado.



