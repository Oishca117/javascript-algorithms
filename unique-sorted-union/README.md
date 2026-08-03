# Union of Unique Arrays

## Overview

This project implements a function that accepts two or more arrays and returns a new array containing only unique values in the order they are first encountered.

The solution traverses each array, checks whether a value has already been added to the result, and only adds values that have not been seen before.

## Skills Practiced

* Working with nested loops
* Traversing multiple arrays
* Using the `arguments` object to handle a variable number of function arguments
* Checking for duplicate values with `includes()`
* Building and returning a new array

## Approach

My solution begins by creating an empty array to store the final unique values.

Since the function can receive an unknown number of arrays, I used JavaScript's `arguments` object to access every argument passed into the function. I then used an outer loop to iterate through each array and an inner loop to iterate through each value inside those arrays.

For every value, I checked whether it already existed in the result array using `includes()`. If it had already been added, the loop continued to the next value. Otherwise, the value was pushed into the result array.

Finally, the function returns the completed array containing only unique values while preserving the order in which they were found.

## Challenges

The biggest challenge was figuring out how to handle an unknown number of arrays. My first thought was to process the first array and then the second, but I realized that approach would only work for exactly two arrays.

That led me to revisit the `arguments` object and think about the problem differently. Once I understood that `arguments` contained every array passed into the function, the algorithm became much clearer: loop through each array, then loop through each value.

## What I Learned

This project helped reinforce the idea of solving a problem by first thinking about the algorithm before worrying about the JavaScript syntax.

I also gained a much better understanding of the `arguments` object and why it exists. Although my solution uses `arguments`, I learned that modern JavaScript typically solves this problem with **rest parameters (`...arrays`)**, which automatically collect all arguments into a real array. Rest parameters are generally preferred today because they are more descriptive and provide access to all array methods, while still solving the same problem.
