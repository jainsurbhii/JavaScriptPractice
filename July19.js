/*Ananya loves Surbhi. He sends her gifts every day. But, sometimes when he is busy, he forgets to send gifts for Surbhi.

Given an array of 31 length, where 1 denotes Ananya sent a gift on that day, and 0 denotes Ananya did not send a gift on that day.

Find out the maximum continuous number of days for which Ananya sent a gift to surbhi.
Example:

[1 1 1 1 1 1 0 0 0 0 0 1 1 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0]
Result: 10 Days*/

let arr=[1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1]
let count=0;
let maxvalue=0;
let result=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
        count++;
        if (count>result)
        {
            result=count;
        }
    }
    else {
        count=0;
    }

}
console.log(result);