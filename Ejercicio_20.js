//
let Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};

let bob = new Person("Bob Ross");
let nombre = bob.getFullName();
console.log(nombre);