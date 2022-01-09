//Letras faltantes
function fearNotLetter(str) {
    for (let i = 0; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}

let prueba = fearNotLetter("abce");
console.log(prueba);