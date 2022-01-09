/*Donde estás */  function whatIsInAName(collection, source) {
    let arr = [];
    // Cambia solo el código debajo de esta línea
    arr = Object.keys(source);

    /* console.log(arr);
      arr = collection.map(item => {
          return {
              first: item["first"],
              last: item["last"]
          };
      }).filter(item => {
          return item.first === source.first || item.last === source.last;
          
      });*/
    return collection.filter(function (obj) {
        return arr
            .map(function (key) {

                return obj.hasOwnProperty(key) && obj[key] === source[key];
            })
            .reduce(function (a, b) {
                return a && b;
            });
    });

    // Cambia solo el código encima de esta línea
}

let arr1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(arr1);
