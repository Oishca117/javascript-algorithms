# Sum All Numbers

## Description

This project implements a `sumAll()` function that returns the sum of two numbers and every number between them, inclusive. The function works regardless of the order the numbers are provided.

## Example

```javascript
sumAll([1, 4]); // 10

sumAll([4, 1]); // 10

sumAll([5, 5]); // 5
```

## How It Works

1. Accept an array containing two numbers.
2. Determine the smaller and larger number using `Math.min()` and `Math.max()`.
3. Loop from the smaller number to the larger number.
4. Add each value to a running total.
5. Return the final sum.

## Challenges

My first solution used two separate `for` loops—one for when the first number was smaller and another for when the numbers were reversed. Although the solution worked, I noticed I had duplicated the loop logic.

I refactored the algorithm by determining the starting and ending values first with `Math.min()` and `Math.max()`. This allowed me to replace the two loops with a single loop, making the code easier to read, easier to maintain, and able to handle cases where both numbers are the same.

## What I Learned

* How to simplify an algorithm by removing duplicated code.
* How `Math.min()` and `Math.max()` can determine a range without conditional logic.
* The importance of looking for opportunities to refactor after getting a working solution.
* How small improvements can make code cleaner and more maintainable.