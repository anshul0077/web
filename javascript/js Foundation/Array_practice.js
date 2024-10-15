let arr=["Milk Chai","Lemon chai","Masla chai"]

// push
arr.push("Olung chai") // ["Milk Chai","Lemon chai","Masla chai","Olung chai"]
//pop
arr.pop() //["Milk Chai","Lemon chai","Masla chai"]
//unshift
arr.unshift("Milk") // ["Milk","Milk Chai","Lemon chai","Masla chai"]
//shift
arr.shift() //["Lemon chai","Masla chai"]
//
console.log(arr.length )//  3
//Includes
console.log(arr.includes('Lemon chai')); //true
//slice
console.log(arr.slice(1,2)); //Lemon chai
//concat

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
console.log(arr1.concat(arr2)); //1,2,3,4,5,6,7,8,9

// Shallow copy

let ShallowCopy=arr
ShallowCopy.pop()
console.log(ShallowCopy);
console.log(arr);
// this will change the original array

//copy the array with spread operator

let anotherArray=[...arr]
anotherArray.push("ffff")
console.log(anotherArray);
console.log(arr);

//IndexOf  
console.log(arr[1]);// lemon chai


