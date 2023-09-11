# Arrays
---
An array is an especial variable, which can hold more than one variable

## Why Use Arrays

if you have a lsit of items , 

```js
let item1: 'basketball';
let item2: 'laptop';
let item3: 'mobile'
```

### instead of using each item in unique variable you write like this using array literal
```js
let items = [basketball, laptop, mobile]    // syntax of array literal 
```
## Creating an Array
we create array in two ways:
#### 1: Array literal
```js
const array_name = [vlaue1,value2,....., valueN]
```
#### 2: using ```new``` keyword
```js
const array_name = new Array(vlaue1,value2,....., valueN)
```
## Accessing and changing Array Element

```js
array_name[index]  // Access
array_name[index] = 2  // change the index position to this value
```

## Methods of Arrays
 1: concat: merge two or more arrays without mofifying the exist arrays and returns a new array
 syntax: concat(val1,valu2,.......valuN)
 ```js
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let arr3 = arr1.concat(arr2)
```
2: join: Adds all the elements of an array into a string, separated by the specified separator string.
syntax: join() or join(seperator like ,-)
```js
console.log(arr1.join(`_`));  // out: 1_2_3_4
```
3: push: Appends new elements to the end of an array, and returns the new length of the array.
syntax" push(value ..)
```js
let newArray = [];
newArray.push(1,6)
```
4: pop: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
syntax: pop()
```js
console.log(newArray.pop());   // out: 1
```
5: unshift: Inserts new elements at the start of an array, and returns the new length of the array.
syntax: unshift(value1 .......valueN)
```js
console.log(newArray.unshift(0))  // out: 0,1
```
6: shift: Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
syntax: shift()
```js
console.log(newArray.shift())  // out: 0
```
7: reverse:Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
syntax: reverse()
```js
let array = [0,3,1,2]
array.reverse()
console.log(array) // out; 2,1,3,0
```
8: sort: Sorts an array in place. This method mutates the array and returns a reference to the same array.
syntax: sort(),
```js
array.sort()
console.log(array) // out; 0,1,2,3
```
