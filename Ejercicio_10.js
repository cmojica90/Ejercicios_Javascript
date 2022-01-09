/*Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados. */
function uniteUnique(...arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (!newArr.includes(arr[i][j])) {
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr;
}
let prueba = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(prueba);