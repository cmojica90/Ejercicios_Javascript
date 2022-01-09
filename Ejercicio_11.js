//Convierte entidades HTML
function convertHTML(str) {
    let newStr = str.split("")
    for (let i = 0; i < newStr.length; i++) {
        switch (newStr[i]) {
            case "<":
                newStr[i] = "&lt;";
                break;
            case "&":
                newStr[i] = "&amp;";
                break;
            case ">":
                newStr[i] = "&gt;";
                break;
            case '"':
                newStr[i] = "&quot;";
                break;
            case "'":
                newStr[i] = "&apos;";
                break;
        }
    }
    newStr = newStr.join("");
    return newStr;
}

let prueba = convertHTML("<>");
console.log(prueba);

/*function convertHTML(str) {

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        if (str[i] === "&") {
            return str.split("&").join("&amp;");
        } else if (str[i] === "<") {
            return str.split("<").join("&lt;");
        } else if (str[i] === ">") {
            return str.split(">").join("&gt;");
        } else if (str[i] === '"') {
            return str.split('"').join("&quot;");
        } if (str[i] === "'") {
            return str.split("'").join("&apos;");
        }
    }
    return str;
}

let prueba = convertHTML("<>");
console.log(prueba);


function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");*/