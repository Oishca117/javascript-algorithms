# Gate Throughput Simulator

# Description

A JavaScript simulation that models attendee flow through multiple festival gates.

The program processes incoming queues, applies each gate's processing capacity, tracks total throughput, and reroutes overflow attendees to neighboring gates when capacity limits are reached.

# Concepts Practiced

- Arrays of objects
- Object properties
- Dynamic object keys
- Loops
- While loops
- Functions
- Data aggregation
- Simulation logic
- Managing changing data

# How It Works

Each gate contains:
- A unique identifier
- A processing capacity
- A queue of incoming attendees over multiple time intervals

The simulation processes each gate at every tick:
1. Checks how many attendees arrive
2. Processes attendees based on gate capacity
3. Tracks completed throughput
4. Reroutes overflow attendees to the next available gate

# Challenges

One of the biggest challenges with this project was learning how to break a larger simulation into smaller responsibilities.

Instead of writing one large function, I separated the logic into smaller functions that each handled one task:
- Initializing throughput tracking
- Processing individual gates
- Handling overflow
- Managing the simulation timeline

Another challenge was understanding how to create and update object properties dynamically.

Using:

`javascript
summary[gate.id] = 0;
`

helped me understand that object keys can be created using values stored in variables. This was an important step in understanding how JavaScript objects can be used to organize changing data.

Tracking data across multiple loops was also challenging because the simulation had multiple levels of iteration:
- Time ticks
- Gates
- Individual queue values

# What I Learned

This project strengthened my understanding of how to model real-world systems using JavaScript.

I learned:
- How to represent real-world entities using objects
- How multiple functions can work together to create a larger program
- How to track and update accumulated data
- How to use helper functions to keep code organized
- How changing data moves through a program

A major takeaway was learning that larger problems become easier when I focus on the flow of information and separate each responsibility into smaller pieces.

# Future Improvements

- Add a visual representation of the gates
- Allow users to create custom gate configurations
- Add statistics such as average wait time
- Prevent modifying the original queue data during simulation
- Add automated tests