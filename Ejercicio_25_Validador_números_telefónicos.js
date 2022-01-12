function telephoneCheck(str) {
    /*
    PÁGINAS PARA CREAR EXPRESIONES REGULARES
    https://regex101.com/
    https://www.regexpal.com/
    https://regexr.com/
    https://regex101.com/r/hSB0TJ/1=>ENLACE DE LA EXPRESIÓN REGULAR
    
    */
    let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regExp.test(str);
}

console.log(telephoneCheck("555-555-5555"));