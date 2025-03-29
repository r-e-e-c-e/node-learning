# Task: Mastering Array Methods

## Objective:

Given an array of objects representing students with their scores, return a new array containing only the names of students who scored above 80.

## Example Input:

```js
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 85 },
];
```

## Expected Output:

```js
['Alice', 'Charlie'];
```

## Instructions:

-   Use the `filter` method to get students with a score above 80.
-   Use the `map` method to extract only their names.
-   Return the final array.

Implement your solution in `student-solution.js`.

## How to Run the Tests

1. Open a terminal in the project folder.
2. Run the following command to execute the tests:
    ```sh
    node test.js
    ```
3. If your implementation is correct, you will see `All tests passed!`. Otherwise, the test will indicate what went wrong.
