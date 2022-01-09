//Emparejamiento de ADN
//A la cadena de ADN le falta el elemento de emparejamiento.Toma cada carácter, obtén su par y devuelve los resultados como un arreglo bidimensional.
//ESTA ES ,I SOLUCIÓN, SIN EMBARGO LEYENDO UN POCO SE PUEDE RESOLVER MUCHO MÁS FACIL, Y EN MENOS LINEAS DE CODIGO.
function pairElement(str) {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            arr.push(str[i]);
            arr.push("G");
            arr2.push(arr);
            arr = [];
        } else if (str[i] === 'G') {
            arr.push(str[i]);
            arr.push("C");
            arr2.push(arr);
            arr = [];
        } else if (str[i] === 'A') {
            arr.push(str[i]);
            arr.push("T");
            arr2.push(arr);
            arr = [];
        } else {
            arr.push(str[i]);
            arr.push("A");
            arr2.push(arr);
            arr = [];
        }
    }
    return arr2;
}

let prueba = pairElement("TTGAG");
console.log(prueba);

//MEJOR SOLUCIÓN
/*
function pairElement(str) {
    var pares = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
     var arr = str.split("");//convertimos nuestra string en un arreglo
    return arr.map(x => [x, pares[x]]);
}

//test here
pairElement("GCG");*/