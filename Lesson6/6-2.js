const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];
;
function foo(array) {
    let arrayNumeric = array.filter(item => typeof item === 'number');
    if(arrayNumeric.length === 0) return null;
    let sum = arrayNumeric.reduce((a, b) => a + b, 0);
          return sum/array.length;

}

const result = foo(array);

console.log(result);