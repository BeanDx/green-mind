const arr = [5, 3, 10, 9];

let biggestNum = 0;
const changedArr = arr.map((item) => {
    biggestNum = item;
    return item;
}).sort((a, b) => b - a);

console.log(changedArr);
