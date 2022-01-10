//Suma todos los números primos
function sumPrimes(num) {
    let arr = [];
    let suma = 0;
    for (var i = 2; i <= num; i++) {
        if (arr.every((prime) => i % prime !== 0))
            arr.push(i);
    };
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    };
    return suma;
}

let resul = sumPrimes(977);
console.log(resul);

/* MEJOR SOLUCIÓN
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
let resul = sumPrimes(977);
console.log(resul);
*/

