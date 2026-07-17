# Traffic Light Sequencer

# Description

A JavaScript simulation that processes traffic light configurations and generates a timeline of phase changes over multiple cycles.

The project models a real-world system by using objects to store configuration data and functions to validate, simulate, and calculate timing information.

# Concepts Practiced

- Objects
- Arrays
- Nested data structures
- For loops
- For...of loops
- Conditionals
- Early returns
- Data tracking with variables
- Function organization

# Challenges

One of the biggest challenges with this project was learning how to think about nested data structures.

Initially, I treated `config.phases` like an object instead of recognizing that it was an array containing multiple phase objects. Understanding the shape of the data helped me determine how to correctly loop through and access each phase.

Another challenge was separating the different responsibilities of each function. The simulation logic needed to handle validation and output, while the timeline generator needed to track accumulated time using a running total.

I also had to think carefully about where `return` statements were placed because returning too early would stop the function from continuing its intended behavior.

# What I Learned

This project helped me understand how JavaScript can represent and process real-world systems.

I learned:
- How to work with arrays containing objects
- How nested loops can represent different levels of a problem (cycles and phases)
- How variables like `elapsed` can track changing values over time
- How early returns can simplify validation logic
- Why understanding the structure of your data is important before writing code
- A loop can represent different things (cycles vs. phases)

# Biggest Takeaway

A major lesson from this project was to break problems into the main algorithm first before trying to solve every edge case.

Understanding the expected data flow made the implementation much easier and helped me avoid overcomplicating smaller details.

# Future Improvements

- Handle invalid phases more consistently in `generateTimeline`
- Add a visual traffic light interface
- Add tests for different configurations and edge cases
- Simulate actual time delays instead of only generating a timeline