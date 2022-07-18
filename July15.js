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
* neigbour 0f house no 0 = house no 1
* neigbour 0f house no 2 = house no 1+ house no 3
* neigbour 0f house no 6 = house no 5 //2000
* neigbour 0f house no 4= house no 3+house no 5 2000+1
*
*
* */

let arr=[2,5,0,3,1,2,4]
let max=0;
let y;
for(let i=1;i<arr.length-1;i++) {
    if (max < arr[i - 1] + arr[i + 1]) {
        max = arr[i - 1] + arr[i + 1];
        y = i;
    }
}
console.log(y);

/*[2,5,0,3,1,2,4]
  [0,1,2,3,4,5,6]
max=0
2+0=2;0<2
max=2
i=2
max=2
2<5+3=8
max=8
y=i;


i=3
8<0+1=m8<10
max=8
y=i;
i=4
8<3+2;8<5
max=8
i=5
8<5



 */


