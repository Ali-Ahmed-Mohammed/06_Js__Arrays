
// cretaing array literal

let arr = [1,2]


// access indices(0,1,.....)

// dot or bracket  in object

// bracket in array

// methods of array 33

//1: concat: merge two or more arrays without mofifying the exist arrays and returns a new array
// syntax: concat(val1,valu2,.......valuN)
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let arr3 = arr1.concat(arr2)
// console.log(arr3);


// 2: join: Adds all the elements of an array into a string, separated by the specified separator string.

// syntax: join() or join(seperator like ,-)
// console.log(arr1.join(` sepeator `));

// 3: push: Appends new elements to the end of an array, and returns the new length of the array.

// syntax" push(value ..)
let newArray = [3,7,4];
newArray.push(1,6,2,5)
// console.log(newArray);

// 4: pop: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// syntax: pop()
// console.log(newArray.pop());


// 5: unshift: Inserts new elements at the start of an array, and returns the new length of the array.
// syntax: unshift(value1 .......valueN)
newArray.unshift(-1)

// 6: shift: Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// syntax: shift()
newArray.shift()

// 7: reverse:Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// syntax: reverse()
// newArray.reverse()


// 8: sort: Sorts an array in place. This method mutates the array and returns a reference to the same array.

// syntax: sort(),
newArray.sort()

let x = [11, 2, 22, 1].sort((a, b) => {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
   return a - b
})
console.log(`output: ${x}`);

console.log(x);









// console.log(newArray); // this line code helps me to display the array elements

