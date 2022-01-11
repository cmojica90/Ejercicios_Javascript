//CONVIERDE NÚMEROS DECIMALES A ROMANOS 
function convertToRoman(num) {
    let contador = num;
    const numeros = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M"
    };
    num = '';
    const numerosInvertido = Object.keys(numeros).reverse();
    numerosInvertido.forEach(key => {
        while (key <= contador) {
            num += numeros[key];
            contador -= key;
        };
    });
    return num;
}

let resul = convertToRoman(3999);
console.log(resul);