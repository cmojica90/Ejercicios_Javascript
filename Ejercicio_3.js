//Busca y destruye
function destroyer(arr, ...arg) {
    return arr.filter(item => !arg.includes(item));
}
let newArr = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(newArr);