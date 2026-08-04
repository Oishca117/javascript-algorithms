# DNA Pairing Algorithm

## Description

This project implements a `pairElement()` function that takes a DNA strand as input and returns an array containing each base pair.

In DNA, the four bases always pair together:

* A pairs with T
* T pairs with A
* C pairs with G
* G pairs with C

The function returns each original base alongside its matching pair.

## Example

```javascript
pairElement("ATCG");

// Output:
[
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"]
]
```

## How It Works

1. Create an object that stores each DNA base and its matching pair.
2. Create an empty array to store the completed pairs.
3. Loop through each character in the provided DNA string.
4. Use the current character as a key to look up its matching base.
5. Create an array containing the original base and its pair.
6. Add the pair to the result array.
7. Return the completed array.

## Challenges

The main challenge was deciding how to represent the DNA pairing relationship. My first thought was to use conditional statements to check each possible base, but since each base has a fixed matching value, I chose to use an object as a lookup table instead.

This allowed the algorithm to retrieve the matching pair directly instead of using multiple `if/else` statements. This made the solution cleaner and easier to expand if more mappings were added in the future.

## What I Learned

* How to use objects as lookup tables.
* How to access object values dynamically using bracket notation (`object[key]`).
* How to build and return a two-dimensional array.
* How choosing the right data structure can simplify an algorithm.
* The difference between retrieving a value from an object and assigning a new value.
