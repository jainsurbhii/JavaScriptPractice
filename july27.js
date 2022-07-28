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
    //let splitArray=str1.split(x)
    let splitArray=split(str1)
    for (let i = splitArray.length - 1; i >= 0; i--) {
        rev = rev + splitArray[i] + " ";

    }
    return rev;
}
Stringgg = "Ananya loves Surbhi Jain"
let x= revStr(Stringgg)
console.log(x);

/*
* Surbhi Love Ananya
* return type-Array
* a="Ananya"
* arr=["surbhi","Love","Ananya"]
* */

function split(str5){
    let arr=[];
    let str="";
    let j=0;
    console.log(str5)
    for(let i=0;i<str5.length;i++){

        if(str5.charAt(i)===' '){
            arr[j]=str;
            j++;
            str="";
        }
        else
        {
            str = str + str5.charAt(i);
        }
    }
    arr[j]=str;
    return arr;
}


