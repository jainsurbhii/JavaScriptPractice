/*Given an array and an integer k. Find out the index of k in the array.
Example:
Array = [10, 20, 25, 35, 50]
K = 35

Result: 3*/
function July16(arr,k) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return i;
        }
    }
}
let x=[10, 20, 25, 35, 50]
console.log(July16(x,35))
