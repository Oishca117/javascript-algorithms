# Smart Pantry Restocker

# Description

A JS-based pantry management system that processes incoming shipments, determines inventory actions, and organizes items by storage zone.

The program simulates receiving pantry inventory data, deciding whether items should be restocked, discarded, or donated, and safely processing inventory updates without modifying the original pantry data.

# Features

- Parses shipment data from formatted strings
- Removes duplicate inventory items
- Handles missing storage zones with default values
- Determines restock, discard, and donate actions
- Groups inventory actions by storage zone
- Creates deep copies of pantry data to prevent unintended mutations

# Concepts Practiced

- Arrays
- Objects
- Array iteration
- Loops
- Conditionals
- Object properties
- Dynamic object keys
- Deep copying
- Data transformation

# Challenges

One of the biggest challenges with this project was learning how to break a larger problem into smaller functions instead of trying to solve everything at once.

The project required multiple stages of data processing: parsing raw shipment data, deciding what action should be taken for each item, organizing results by zone, and creating a safe copy of the pantry data. Understanding how data moved from one function to another helped me build a clearer mental model of how JavaScript programs are structured.

Another challenge was working with objects and references. Understanding the difference between modifying an object directly versus creating a copy was important when implementing the deep copy functionality. This helped reinforce how JavaScript handles objects and arrays in memory.

I also practiced using dynamic object keys when grouping items by zone, which helped me understand how objects can be built and updated based on changing data.

# What I Learned

This project helped me strengthen my understanding of how JavaScript can be used to transform and organize data.

I learned how to:
- Convert raw string data into structured objects
- Use arrays of objects to represent real-world information
- Separate responsibilities into smaller functions
- Use conditionals to apply business rules
- Create new objects dynamically based on existing data
- Understand why copying objects and arrays requires more care than primitive values

One of the biggest lessons from this project was that solving problems becomes easier when I focus on the flow of data: what format the data starts as, how each function changes it, and what format the next function expects.

# Future Improvements

- Add user input instead of hardcoded data
- Add tests
- Create a simple interface for managing inventory