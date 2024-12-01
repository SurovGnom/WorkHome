function product(number) {
    return function(doubleNumber){
        return number * doubleNumber;
    }
}

const result = product(5)(2);

console.log(result)