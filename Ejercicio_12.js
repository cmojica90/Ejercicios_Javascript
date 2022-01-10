// Cantidad de números que deseamos imprimir
function sumFibs(num) {
    const arr = [1, 1];
    let sig = 0;
    while ((sig = arr[0] + arr[1]) <= num) {
        arr.unshift(sig);
    }
    return arr.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

let resul = sumFibs(10);
console.log(resul);