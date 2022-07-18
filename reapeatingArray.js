/*
Given an array where all integers are repeating twice, except 1 integer.
The repeating integers are always next to each other. Find out the non repeating integer.
[5, 5, 10, 10, 9, 7, 7]
result=9*/




/*
compare a[0] & a[1] element of array; i i+1
above is true then it will compare a[2] &a[3]; i, i+1
above is true then it will compare a[4] & a[5]; i, i+1
above is false

result=a[4]


* */
let arr=[5, 5, 10, 10, 9, 7, 7]
for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
        i++;
    }
    else {
        console.log(arr[i])
        break;
    }

}






