console.log("hello World");


    function bubbleSort(arr){
        for(let i=0;i<arr.length;i++){
            for (let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp
                }
            }

        }
        return arr;
    }
let arr2=[6,8,23,1,67,90,76]
let x= bubbleSort(arr2);
    console.log(x);
/*

    let arr3=[1,2,3,4,5,6,7,8,9,10];
    let low=0;
    let high=arr3.length-1;
    let search=8;

    while (high>=low) {

        let mid=(high+low)/2;
        let midValue = arr3[mid];
            if (midValue === search) {
                console.log("element found at" + mid);
                break;
            }
            if (search > midValue) {
                low=mid + 1;
            } else {
                high = mid -1;
            }
    }

/*
* [12,19,23,35,40]
* search=19;
* low=0
* high=4
* mid=2
* mid value=23
* high=1
* mid=0
* mid value=12
* low=1
* mid =1;
* mid value=19
*
*
*
* */


/*let arr3=[1,3,5,7,8,9,10]
console.log(arr3.length)
let search=8;
//let mid=(arr3.lenght)/2

let low=0;
let high= arr3.length
let mid=(low+high)/2;
console.log(mid);
x=parseInt("mid");
console.log(x);


    if (arr3[mid] === search) {
        console.log("element found at" + mid);
    }


 {
    if (mid[i] < search) {
        //let low = mid + 1;
        //let high = arr.length
        low=mid+1;
        mid = (low + high) / 2;
        if (mid === search) {
            console.log("element found");
        } else {
            console.log("element not found")
        }
    }
}

}
*/

/*
1: find the mid point
mid=(arr3.length)/2;
mid=3
2:check mid point element is greater/less than search element and element is equal to search value then element
mid value=7
Search element=10
(7<10)
3: search element is greater than mid value.
low=mid+1=4
high=arr.length=6
mid=(low+high)/2;
mid=5
mid value=8
4:search element is greater than mid value.
low=mid+1=9
high=arr.length=6
mid=(low+high)/2;
mid=7
mid value=10
5:Mid value=Search value
Search is found.
 */

/*
let arr3=[1,3,5,7,8,9,10]
let search=5;
1: find the mid point
mid=(arr3.length)/2;
mid=3
[1,3,5]

2:check mid point element is greater/less than search element and element is equal to search value then element
mid value=7
Search element=5
(7>5)
3: search element is less than mid value.
low=0
high=mid-1=2
mid=(low+high)/2;
mid=1
mid value=3
[1,3]
4:search element is greater than mid value.
low=mid+1=2
high=arr.length=6
mid=(low+high)/2;
mid=3
mid value=5
5:Mid value=Search

 */


/*
* low=0
* high=arr.length-1
* mid=(0+6)/2=3
* [1,3,5,7,8,9,10]
* mid=3
* mid value=7
* 7>5
*
*
* [1,3,5]
* high-mid-1=2
* low=0;
* mid=(0+2)/2=1
* mid value=3
* (3<5)
*
* [3,5]
* low=0;
* high=mid+1=2
* mid=(0+2)/2=1
* mid value=5
*

* */
/*
* 1,2,3,4,5,6,7,8,9,10
* search=8
low=0
high=arr.length
* check for mid
* mid=(high+low)/2
* mid=5
* mid value=5
* search value is grater than mid value
* (8>5)
* now,searching will be done one right hand side.
* low=mid+1
* 6+10=16/2=8
* search element and mid element are same
* 8=8(search found)
*
* Example2
* search=3
* check for mid value
* mid=(high+low)/2(0+9)/2=4
* mid=4
* mid value=5
* Search value is less than mid value
* (3<5)
* high=mid-1(4-1)=3
* low=0
* mid(0+3)/2=1
mid value=2
* (2<3)
* low=mid+1=2
* high=3
* mid(2+3)/2=2
* mid value=3(search found)
*
 */






