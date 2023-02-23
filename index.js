// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

function removeElement(array, index){
    array.splice(index, 1);
    return array
}
console.log(removeElement(array, 4));