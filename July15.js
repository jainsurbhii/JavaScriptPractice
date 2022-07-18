/*Given a list of integer, each element donating the number of dogs living in that house.
* find out the house which has maximum num of dogs living with their imediate neigbour
* example [2,5,0,3,1,2,4]
* result=2

[1,0,2,5,3,0,3]=ladkiya
 0,3,5,5,5,6,0=5th

* check the maximum value
* [2,5,0,3,1,2,4];
* a[0]=a[1]
* a[1]=a[0]+a[2]// a[i]=a[i-1]+a[i+1]
* a[2]=a[1]+a[3]
* a[3]=a[2]+a[4]
* */

let arr=[2,5,0,3,1,2,4]
let arr2=[];
let max=0;
for(let i=1;i<arr.length-1;i++){
    arr2[i]=arr[i-1]+arr[i+1];
    if (max < arr2[i]) {
        max = arr2[i];
    }

}
let x=max
let index = arr2.indexOf(x);
console.log(index);



