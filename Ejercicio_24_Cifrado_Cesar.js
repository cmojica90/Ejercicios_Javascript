function rot13(str) {
    const pares = {
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    };
    str = str.split("");
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (pares[str[i]] !== undefined) {
            newStr.push(pares[str[i]])
        } else {
            newStr.push(str[i]);
        }
    }
    return newStr.join("");
}
//rot13("SERR YBIR?")
console.log(rot13("SERR YBIR?"));

//Solución realizada por mi carlos Mario Mojica ufff