//Busca y reemplaza
function myReplace(str, before, after) {
    let index = str.indexOf(before);//buscamos la ubicación de la palabra en la cadena 
    if (str[index] === str[index].toUpperCase()) {//preguntamos si la primera letra que buscamos esta en mayusculas 
        after = after.charAt(0).toUpperCase() + after.slice(1);//modificacmos after si eso ocurre
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);//modificacmos after si eso ocurre
    }
    str = str.replace(before, after);

    return str;
}

let respuesta = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(respuesta);