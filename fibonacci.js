/*1,1,2,3,5,8,13,21,34
1: let a=1, b=1,
print a;
print b;
c=a+b 2
a=b;//1
b=c;//2
* */


/*
console.log(a);
console.log(b);
for(let i=0;i<10-2;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}
*/

function fibo(n){


    let c;
    let a=0;
    let b=1;

        const arr1=[];
        arr1[0]= a;
        arr1[1]=b;
        for (let i = 2; i < n; i++) {
            c = a + b;
           arr1[i]=c;
            a = b;
            b = c;

        }
    return arr1;

}

function fibo1(n){

    const arr2=[];
    let c;
    arr2[0]= 0;
    arr2[1]=1;
    for (let i = 2; i < n; i++) {

        arr2[i]=arr2[i-2]+arr2[i-1]


    }
    return arr2;

}
//[0,1,1,2,3,5]
//[0,1,2,3,4,5]
/*arr[x]=arr[y]+arr[y+1]
arr[y+2]=arr[0]+arr[1]
arr[3]=arr[1]+arr[2]
arr[4]=aar[2]+arr[3]
arr[5]=arr[3]+arr[4]

2-2=0
3-2=1
4-2=2
5-2=3

x-2=y

arr[x]=arr[x-2]+arr[x-1]









fibo(15)

/*
* n=5, a=0,b=1
* c=1
* [0,1,1]
* a=1;
* b=1;
* c=2
* [0,1,1,2]
* a=1
* b=2
* c=3
* [0,1,1,2,3]
*
* */