const cambioEnt = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
}
function checkCashRegister(price, cash, cid) {

    let cambioAEntregar = cash * 100 - price * 100;
    let verificarCambio = cambioAEntregar;
    let change = [];
    let status = "";
    let sumaCid = 0;
    let newCid = cid.filter(elem => elem[1] !== 0).reverse();//ordenamos el array cid y lo guardamos en una variable
    newCid.forEach(elem => {
        let posCorr = elem[0];
        let sumaCorr = elem[1] * 100;
        sumaCid += sumaCorr;
        let monto = 0;
        while (cambioAEntregar >= cambioEnt[posCorr] && sumaCorr > 0) {
            monto += cambioEnt[posCorr];
            cambioAEntregar -= cambioEnt[posCorr];
            sumaCorr -= cambioEnt[posCorr];
        }
        if (monto !== 0) {
            change.push([posCorr, monto / 100]);
        }
    });
    if (cambioAEntregar > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (cambioAEntregar == 0 && verificarCambio == sumaCid) {
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }
    return { 'status': status, 'change': change };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//realizado con la ayuda de aksonai, https://www.youtube.com/channel/UCLoSDcmy_o6800L7KDensjg
