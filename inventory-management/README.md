# Inventory Management Program

A JavaScript inventory management application that keeps track of products and their quantities. This project began as a freeCodeCamp lab and was expanded to reinforce working with arrays, objects, functions, and data manipulation.

## Features

- Add new products to inventory
- Update quantities of existing products
- Remove inventory while preventing negative stock
- Case-insensitive product lookups
- Product search using reusable helper functions

## Technologies Used

- JavaScript (ES6)
- Node.js

## Concepts Practiced

- Arrays of objects
- Object manipulation
- Function decomposition
- Helper functions
- Array methods (`findIndex`)
- Data validation
- String normalization
- Conditional logic

## Example

```javascript
addProduct({ name: "Apples", quantity: 5 });
addProduct({ name: "APPLES", quantity: 3 });

console.log(inventory);

// [
//   { name: "apples", quantity: 8 }
// ]
```

## Challenges

One of the biggest challenges was thinking through how to update an existing product instead of creating duplicates. I also spent time understanding how helper functions could simplify the rest of the program by handling product searches in one place.

Another challenge was making product names case-insensitive. Normalizing names to lowercase before searching or storing them made the program much more reliable.

## What I Learned

Working on this project reinforced how useful it is to break problems into smaller functions. Creating a dedicated `findProductIndex()` helper made the rest of the program much easier to write and understand.

It also helped me become more comfortable working with arrays of objects, updating object properties, and thinking through program state instead of solving everything in one large function.

## Future Improvements

- Search products by name
- Sort inventory alphabetically
- Track product categories
- Save inventory to a JSON file
- Build a simple command-line interface
- Create a browser version with a user interface
