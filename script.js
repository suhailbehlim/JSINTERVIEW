// quesion1. Var let const

//  1.scope- scope is a certain reach an of program  where are defined variable is exist  and can be recognised.
//   and beyond that it cannot be recognised ,called scope.
//  type of scopes- 1.global scope 2.block scope 3.functional scope.

// console.log("hello");
// console.error("hello");
// console.warn("hello");
// console.info("any");
console.table(["apples", "oranges", "bananas"]);
// console.clear();

//2. variable Shadowing-
// if var to let then its leggal shadowig but in case of let to var then it wi be illegal shadowig and gives an error.

function test() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a);
  }
  console.log(a);
}
test();

// let and const cannot be redeclare in same scope but var can be redeclare.
// var a;
// const b; cannot be decalare without initialized

// 3.hoisting- all the variable are initialised on the top before its execution.
// let and const are hoisted but in temeporaral dead zone
// console.log(count);
// var count ='4';





//question2.map,filter,reduce
//map method-it is an array method of javascript which is used for creating a new array from existing array by applying a function to each one of the elements of the first array .
// const nums =[1,2,3,4,5];
// const multiplyThree = nums.map((num,i,arr)=>{
// return num*3 + 1;
// });
// console.log(multiplyThree);



// 2.filter method-
// filters return only those elements from the array which fulfills the provided creiteria


// const nums =[1,5,4,10];

// const moreThanTwo=nums.filter((num)=>{

// return num>2;

// });
// console.log(moreThanTwo);


// 3.reduce method-
const nums = [1,5,2,55];

const sum = nums.reduce((acc,curr,i,arr)=>{
return acc+curr;
},0);

console.log(sum);