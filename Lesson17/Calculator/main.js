class Calculator {
    constructor() {
    }
    add(a,b) {
        return a + b;
    }
    substract (a,b) {
        return a - b;
    }
    multiply(a,b) {
        return a * b;
    }
    divide(a,b) {
        return a / b;
    }

}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.substract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
