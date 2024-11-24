const message = prompt('Enter your string');
const chars = prompt('Enter some chars for removing');


// function foo(string: string, arr: Array<string>): string
function foo(string, arr) {
    let array = Array.from(string);
    array.splice(arr.length - 1, arr.length);
    return array;
}

const result = foo(message, chars);

alert(result);