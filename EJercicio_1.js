//Suma todos los números en un rango
function sumAll(arr) {
    let sumador = 0;
    //console.log(Math.min(...arr)); muestra el menor valor de un array
    //console.log(Math.max(...arr)); muestra el mayor valor de un array
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumador += i;
    }
    return sumador;
}
let suma=sumAll([4, 1]);
console.log(suma);