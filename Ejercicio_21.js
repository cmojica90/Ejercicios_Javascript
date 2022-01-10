//Mapea el Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
        let ejeTierra = earthRadius + avgAlt;
        let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(ejeTierra, 3) / GM));
        return { name, orbitalPeriod };
    });
}
//Math.round redondea un numero
//Math.sqrt calcula la raiz cuadrada
//Math.PI cel valor de pi
//Math.pow calcula la potencia de un número

let resul = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(resul);