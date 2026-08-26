# Playlist Remix Engine

A JavaScript algorithm that combines multiple listener playlists into a single broadcast schedule. The program flattens nested playlists, scores tracks, removes duplicate songs, limits artist appearances, and generates a final numbered play order.

## How It Works

The remix engine processes playlists through a series of helper functions:

1. **`flattenPlaylists`** — Combines multiple playlists into one flat array while preserving each track's original playlist and track index.
2. **`scoreTracks`** — Calculates a score for each track based on votes and how close its BPM is to 120.
3. **`dedupeTracks`** — Removes duplicate tracks based on `trackId`, keeping the first occurrence.
4. **`enforceArtistQuota`** — Limits how many times an individual artist can appear in the final playlist.
5. **`buildSchedule`** — Converts the remaining tracks into a numbered broadcast schedule.
6. **`remixPlaylist`** — Coordinates all of the previous functions in the correct order to produce the final schedule.

## Challenges

### Working With Nested Arrays

One of the first challenges was understanding how to traverse an array containing multiple playlists, where each playlist contained an array of track objects.

I needed to use two loops so that the outer loop could provide the playlist index and the inner loop could provide the track index.

I also needed to create a copy of each track object before adding the new `source` property.

### Understanding Array Indexes

While using `for...in`, I learned that the index is returned as a string rather than a number.

For example, the index could be returned as `"0"` instead of `0`. I used `parseInt()` to convert the track index into a number before storing it in the `source` property.

This reinforced the difference between an array's index and the actual value stored at that index.

### Using `.some()` to Find Duplicates

The `dedupeTracks` function introduced a new way of thinking about duplicate values.

Instead of checking whether the entire track object already existed, I needed to check whether another track with the same `trackId` had already been added to my new array.

I used `.some()` to check the existing tracks and compare their `trackId` values to the current track.

This helped me better understand that `.some()` returns a boolean based on whether at least one element passes the condition.

### Enforcing the Artist Quota

The most challenging function was `enforceArtistQuota`.

I needed to determine how many times the current artist had already appeared in the new array before deciding whether to add the current track.

I used `.filter()` to find existing tracks with the same artist and then used `.length` to count those occurrences.

If the count had reached the maximum allowed amount, I skipped the track using `continue`.

This also helped me understand how the variable inside a `.filter()` arrow function represents each individual element being examined from the array.

### Understanding Arrow Functions

Arrow functions were another area I had to slow down and think through.

For example:

`artistQuota.filter(existingTrack => existingTrack.artist === currentTrack.artist)`

I had to understand that `existingTrack` represents one track object from `artistQuota`, while `currentTrack` represents the track currently being processed from the original array.

Thinking of the arrow function as "For each existing track, check this condition" made the syntax easier to understand.

### Building the Broadcast Schedule

`buildSchedule` required me to think about the difference between a zero-based array index and the one-based broadcast slot required by the project.

The tracks were already in the correct order, so this function did not need to rearrange them. It only needed to create a new object containing the track's `trackId` and its broadcast position.

I used `.entries()` so I could access both the index and the track object at the same time.

### Connecting the Functions

The final challenge was understanding how `remixPlaylist` should use all of the helper functions.

Rather than solving the entire problem again, `remixPlaylist` passes the result of one function into the next:

`flatten → score → dedupe → enforce quota → schedule`

This helped reinforce the idea that larger problems can be broken into smaller functions that each have one responsibility.

## What I Learned

- How to traverse nested arrays using multiple loops
- How to work with array indexes and zero-based indexing
- How to validate arrays using `Array.isArray()`
- How to use `for...in` to access indexes
- How to use `for...of` to access values
- How to convert a string index into a number with `parseInt()`
- How to use object spread syntax to create copies of objects
- How to add new properties to copied objects
- How to access nested object properties using dot notation
- How `.some()` can be used to determine whether a matching item exists
- How `.filter()` can be used to find matching objects
- How `.length` can be used to count matching results
- How arrow function parameters represent individual elements being processed
- How `continue` can be used to skip an iteration
- How `.entries()` can provide both an array's index and value
- How to pass the return value of one function into another
- How to break a larger problem into smaller helper functions

## Key Takeaways

The biggest takeaway from this project was learning to break a larger problem into smaller, manageable pieces.

Instead of trying to figure out the entire playlist engine at once, I focused on understanding what each function needed to accomplish and then built them one at a time.

I also became more comfortable with array methods such as `.some()` and `.filter()`. Rather than just knowing the syntax, I practiced understanding what each callback variable represented and what the method was actually doing with the array.

Another important takeaway was becoming more comfortable with indexes. I had to work with nested array indexes, understand that `for...in` returns indexes as strings, and later use `.entries()` when I needed both the index and the value.

Finally, I learned more about how functions can work together as a pipeline. Each function had a specific responsibility, and the output from one function became the input for the next. This made the overall problem much easier to reason about than trying to solve everything inside one large function.