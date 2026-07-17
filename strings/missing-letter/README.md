# Missing Letter Detector

## Description

A JavaScript algorithm that identifies a missing letter from a sequence of letters arranged in alphabetical order.

The program compares each letter with the next letter in the sequence and determines where the alphabetical pattern breaks.

## Concepts Practiced

- Strings
- String indexing
- For loops
- Character codes
- Comparison logic
- Returning values from functions

## Challenges

One of the biggest challenges with this project was learning how to compare characters based on their position in the alphabet.

Initially, I found it difficult to think about comparing neighboring values and understanding how the index of a string relates to the character being evaluated.

Breaking the problem down into smaller steps helped:
1. Get the current character
2. Get the next character
3. Compare their alphabetical positions
4. Return the missing character when the pattern breaks

Another challenge was understanding that characters can be converted into numeric values using `charCodeAt()` and converted back into characters using `String.fromCharCode()`.

## What I Learned

This project strengthened my understanding of how strings can be treated as collections of data.

I learned:
- How to access individual characters using indexes
- How to compare sequential values
- How character codes can be used to solve problems involving letters
- How returning early from a loop can stop execution once the answer is found

A major takeaway was that problems involving patterns become easier when I focus on the relationship between values instead of only looking at the values themselves.

## Future Improvements

- Add support for uppercase letters
- Handle invalid input
- Create a version that works with longer sequences
- Add automated tests