# Random Password Generator

## Overview

This project creates a function that generates a random password based on a user-provided length.

The function builds a password by selecting random characters from a predefined set of uppercase letters, lowercase letters, numbers, and special characters. Each generated password is returned as a new string with the requested number of characters.

## Skills Practiced

* Creating and using functions with parameters
* Using loops to repeat a process a specific number of times
* Working with strings and string indexing
* Generating random values with `Math.random()`
* Converting random decimals into valid indexes using `Math.floor()`
* Building strings using the `+=` operator

## Approach

My solution starts by creating a string containing all valid characters that can be used in the password.

I then create an empty string to store the password as it is built. Using a loop that runs based on the requested password length, I generate a random index within the character string, retrieve the character at that index, and add it to the password.

Once the loop finishes, the completed password string is returned.

## Challenges

The biggest challenge was understanding how to generate a random index within the range of a string's length.

`Math.random()` only produces a decimal between 0 and 1, so I needed to scale that value by the length of the character string and then use `Math.floor()` to convert it into a valid whole number index.

Understanding this process helped connect how random numbers, indexes, and strings work together in JavaScript.

## What I Learned

This project reinforced the importance of breaking problems down into smaller steps before writing code.

I also gained a stronger understanding of how strings can be accessed using indexes, similar to arrays, and how the pattern:

`Math.floor(Math.random() * collection.length)`

can be used to select a random item from a collection.

This concept can be applied beyond password generators, such as selecting random elements in games, shuffling data, or creating randomized outputs.
