//Pig Latin (Latin de los cerdos)

/*function translatePigLatin(str) {
  return str;

}

translatePigLatin("consonant");*/

function translatePigLatin(str) {
    let regex = /^[^aeiou]+/;
    let conspalabra = str.match(regex);
    return conspalabra !== null
        ? str
            .replace(regex, "")
            .concat(conspalabra)
            .concat("ay")
        : str.concat("way");
}
let respuesta = translatePigLatin("consonant");
console.log(respuesta);