//Diferencia entre dos arreglos
function diffArray(arr1, arr2) {
    let newArr = [];
    newArr = arr1.concat(arr2).filter(diferente => !arr1.includes(diferente) || !arr2.includes(diferente));
    return newArr;
}
let arr = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(arr);