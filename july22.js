function checkChar(str1,n){
    for(let i=0;i<str1.length;i++)
    {
        if(str1.charAt(i)===n)
        {
            return true;
        }
    }
    return false;
}




let x;
function minStr(str) {
    for (let j = 1; j <= str.length; j++) {
        for (let i = 0; i < str.length; i++) {
            x = str.substring(i, i + j)
            if (i + j <= str.length) {
                if (checkchar2(x)) {
                    return x;

                }

            }

        }
    }
}
let str2="abuoeia";
console.log(minStr(str2));




//console.log(array.length[1]);
/*
function minimun (num) {
    let
    for(let i = 1; i < num.length; i++) {
        if(num[i] < min) {
            min = num[i];
        }
    }
    return min;
}

*/
//if it contains all the vowels then print else do not print

function checkchar2(x) {
    let y = checkChar(x, "a")
    let z = checkChar(x, "e")
    let k = checkChar(x, "i")
    let p = checkChar(x, "o")
    let q = checkChar(x, "u")

    if (y && z && k && p && q === true) {
        return true;
    }
    return false;
}

/*
Given a string, check all the vowels are present or not.
* str1=abcde, n=c
* str1=abcde, n=b&&d
*
*a=b
*b=b
*
* a=d
* b=d
* c=d
* d=d
*
*
Ananya
An

Mango
Mango is my fav fruit
Mango
*/

