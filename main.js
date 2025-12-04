let a = 5;
let b = 10;

if (a > b) {
    console.log("a es mayor que b");
} else if (a < b) {
    console.log("a es menor que b");
} else {
    console.log("a es igual a b");
}

console.log(a > b ? "a es mayor que b" : "a no es mayor que b");

let andar = 2;

switch (andar) {
    case 0:
        console.log("Andar 0");
        break;
    case 1:
        console.log("Andar 1");
        break;
    case 2:
        console.log("Andar 2");
        break;
    case 3:
        console.log("Andar 3");
        break;
    default:
        console.log("Andar no válido");
        break;
}


