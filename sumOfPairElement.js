/*let arr=[5,10,8,20,12,6,15];
let sum=0;
let k=28;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;i<arr.length;j++){
        sum=arr[i]+arr[j];
        if (sum===k){
            console.log("true");
            break;
        }

    }

}
*/

function abc(arr1, k)
{
    let sum1=0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            sum1 = arr1[i] + arr1[j];
            if (sum1 === k) {
                return true;
            }
        }
    }
    return false;
    //return true;

}
let arr1=[5,10,8,20,12,6,15];
let x= abc(arr1, 90);
console.log(x);
