/*let str ="Ananya loves Surbhi"
str=str.split(" ")
let rev=" "
let newStr=" "
for(let i=str.length-1;i >=0;i--){
 rev = rev + str[i];

}

console.log(rev);

*/
let rev=" ";

function revStr(str1) {
    str1=str1.split(" ")
    for (let i = str1.length - 1; i >= 0; i--) {
        rev = rev + str1[i] + " ";

    }
    return rev;
}
Stringgg = "I love Surbhi"
let x= revStr(Stringgg)
console.log(x);

