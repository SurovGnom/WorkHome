let number = prompt("Введіть цифри ","");
console.log(number);

let digit1 = number[0];
let digit2 = number[1];
let digit3 = number[2];

if (digit1 === digit2 && digit2 === digit3) {
    console.log("Всі цифри однакові.");
} else {
    console.log("Не всі цифри однакові.");
}

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log("Є однакові цифри.");
} else {
    console.log("Немає однакових цифр.");
}


