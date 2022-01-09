/*Spinal case
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.*/

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
let prueba = spinalCase('This Is Spinal Tap');
console.log(prueba)