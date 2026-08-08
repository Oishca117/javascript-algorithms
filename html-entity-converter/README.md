# Convert HTML Entities

## Description

This project is a solution to the freeCodeCamp **Convert HTML Entities** lab.

The goal was to create a `convertHTML` function that takes a string and converts special characters into their corresponding HTML entities.

The characters that need to be converted are:

* `&` → `&amp;`
* `<` → `&lt;`
* `>` → `&gt;`
* `"` → `&quot;`
* `'` → `&apos;`

## Approach

I used a **lookup table** with an object to store each special character and its corresponding HTML entity.

I then looped through each character in the input string. For each character, I checked whether it existed as a key in the lookup table.

* If it existed, I added the corresponding HTML entity to the result.
* If it didn't exist, I added the original character.

This allowed me to avoid writing a long series of `if` statements checking for every individual special character.

## Challenges

The main challenge was figuring out how to structure the lookup table correctly.

I initially understood that I needed an object, but I had the values set to the original characters instead of their HTML entities. Once I recognized that the object needed to map:

`character → HTML entity`

the rest of the logic became much clearer.

I also ran into a small JavaScript syntax issue because I forgot to separate the object properties with commas.

## What I Learned

* How lookup tables can simplify conditional logic.
* How to use an object's keys to look up corresponding values.
* That accessing a nonexistent object key returns `undefined`.
* How to use that behavior in an `if` statement to determine whether a character needs to be converted.
* How to escape a double quote inside a JavaScript string using `\"`.
* How to build a result string while iterating through another string.

## Key Takeaway

This lab reinforced the idea that sometimes the best way to solve a problem isn't to create more conditions, but to structure the data so the program can look up the answer.
