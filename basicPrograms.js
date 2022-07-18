/*Write a C program to compute the sum of the two given integer values. If the two values are the same, then return triple their sum.*/
function sum(a , b){
    let c=0;
    if(a===b){
        return (a+b)*3;

    }
    else {
        return a+b;
    }
}

let x=sum(3,2);
console.log(x);

/*Write a C program to get the absolute difference between n and 51. If n is greater than 51 return triple the absolute difference*/
function diff(n){
    if(n>51){
        return (n-51)*3;
    }
    else {
        return 51-n;
    }

}
let y=diff(53)
console.log(y)