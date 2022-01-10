//APLANADORA
function steamrollArray(arr) {
    const newArr = [].concat(...arr);
    return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
}

let resul = steamrollArray([1, [2], [3, [[4]]]]);
console.log(resul);