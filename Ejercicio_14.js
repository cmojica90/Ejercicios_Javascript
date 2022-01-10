function smallestCommons(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var candidate = max;
    var smallestCommon = function (low, high) {
        // inner function to use 'high' variable
        function scm(l, h) {
            if (h % l === 0) {
                return h;
            } else {
                return scm(l, h + high);
            }
        }
        return scm(low, high);
    };
    for (var i = min; i <= max; i += 1) {
        candidate = smallestCommon(i, candidate);
    }
    return candidate;
}
let resul=smallestCommons([1, 5]); // should return 60
console.log(resul);
//ejercico extraido de internet https://www.it-swarm-es.com/es/javascript/como-encontrar-el-minimo-comun-multiplo-de-un-rango-de-numeros/1054957766/