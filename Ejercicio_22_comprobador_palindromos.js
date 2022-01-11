/* Comprobador de palíndromos
Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.*/

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    let auxStr = str;
    str = str.split("");
    auxStr = auxStr.split("");
    auxStr = auxStr.reverse();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== auxStr[i]) {
            return false
        }
    }
    return true;
}
let resul = palindrome("1 eye for of 1 eye.");
console.log(resul);