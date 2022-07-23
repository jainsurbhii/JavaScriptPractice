//find out the all the substrings

/*let str=abcd;//1234[1,2,3,4]
for(let i=0;i<str.length;i++){
    let y=str.substring(i, i+1);
    console.log(y);

}
for(let i=0;i<str.length;i++){
   let y= str.substring(i,i+2)
    console.log(y);
}
for(let i=0;i<str.length;i++){
    let y= str.substring(i,i+3)
    console.log(y);
}*/
let str = "abceiouklljgg";
for(let j=1;j <= str.length;j++) {
    for (let i = 0; i < str.length; i++) {
        let y = str.substring(i, i +j)
        if(i+j<=str.length) {
            console.log(y);
        }
    }
}

function checkChar(str1,n){
    for(let i=0;i<str1.length;i++)
    {
        if(str1.charAt(i)===n){
           return true;
        }
    }
    return false;
}

/*
* str1=abcde, n=c
*
* */



/*
let y=0;
console.log(y+1)
console.log(y+2)
console.log(y+3)
console.log(y+4)
console.log(y+5)
for(let x=1;x<=100;x++){
  console.log(y+x);
}
console.log(y+1)
1111111111111101
console.log(y+x);
1111111111111101
n-1
n-2
n-3
abcd
ab bc cd abc bcd a,b,c,d empty substring, abcd
a
b
c
d
ab - 0,0+1
bc=1,1+1
cd=2,2+1
abc
bcd
abcd

ab,bc,cd
*/
