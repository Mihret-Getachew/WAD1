//question 1;
function sum(arr) {
  return arr
    .filter((elem) => elem > 20)
    .reduce((acc, current) => acc + current, 0);
}
console.log(sum([1, 2, 3, 4, 5, 6, 55]));
//question 2
const getNewArray = function (arr) {
  return arr
    .filter((item) => item.length >= 5)
    .filter((item) => item.includes("a"));
};
console.log(getNewArray(["apple", "banana", "mango", "kiwi"]));
//question 3
const str = "hi";
const arr = [1, 2, 3];
const arr2 = ["hello", "world"];
const concat = (a, b, c) => {
  return [...a, ...b, ...c];
};
console.log(concat(str, arr, arr2));
