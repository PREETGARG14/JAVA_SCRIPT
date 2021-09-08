//declare array
let arr=[]  ;
arr =[1,2,3,4,5]         // as java script is a dynamic language so at asame time aaray can store integer,string anything
console.log(arr)
console.log(arr.length)  // array length method
let i=0;
while(i<arr.length)
{
    console.log("element ",i,"is",arr[i])   // printing whole array
    i++
}
//to add at last of array we use -> push
arr.push("last value")


//to add at first/start of array we use -> unshift
arr.unshift("first val")
console.log(arr)

//to remove at first/start of array we use -> shift
arr.shift();

//to remove last of array we use -> pop
arr.pop()

console.log(arr)

console.log(arr.slice(2,4))
console.log(arr)
// slice method to get particular elements of array from index [2,4)
// Attention : slice method make another copy of array
arr.splice(2,2)
console.log(arr)  
// splice method to delete/remove elements of array after index 2 &2(no of elements to be deleted )
//splice method doesnot make copy but change actual array

console.log( arr.indexOf(5,0) ) // to seach index of a element in array
// 5 denotes the element to be searched in array & 0 denotes from index 0 of array it will be searched

arr.contains