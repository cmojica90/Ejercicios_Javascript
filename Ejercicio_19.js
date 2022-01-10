//Argumentos opcionales
function addTogether() {
    let [dato1, dato2] = arguments;
    if (typeof (dato1) !== "number")
        return undefined;
    if (dato2 === undefined)
        return (dato2) => addTogether(dato1, dato2);
    if (typeof (dato2) !== "number")
        return undefined;
    return dato1 + dato2;
}

let resul = addTogether(5);
console.log(resul);