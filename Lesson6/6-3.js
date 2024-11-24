const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    array.splice(array.indexOf(item), 1);
    return array
}

removeElement(array, 4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]