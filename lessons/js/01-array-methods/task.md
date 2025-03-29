# Task: Working with JavaScript Array Methods

## Objective:

In this task, you will write functions to process an array of student records, represented as objects. These functions will perform operations such as filtering, sorting, and calculating averages using JavaScript's built-in array methods.

## Example Dataset:

```js
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 50 },
    { name: 'Eve', score: 65 },
];
```

## Expected Results:

### 1. Get the Total Number of Students

```js
getNumOfStudents(students);
// Output: 5
```

### 2. Get Names of Students Who Scored Above 80

```js
getTopStudentsNames(students);
// Output: ['Alice', 'Charlie']
```

### 3. Get Names of Students Who Scored Below 60

```js
getFailingStudentsNames(students);
// Output: ['David']
```

### 4. Calculate the Average Score of All Students

```js
getAverageScore(students);
// Output: 73.00
```

### 5. Sort Students by Score in Descending Order

```js
sortStudentsByScore(students);
/* Output:
[
    { name: 'Alice', score: 90 },
    { name: 'Charlie', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Eve', score: 65 },
    { name: 'David', score: 50 }
]
*/
```

### 6. Get the Name of the Top Scoring Student

```js
getTopScorer(students);
// Output: 'Alice'
```

### 7. Get Names of Students Who Scored Between 60 and 70

```js
getBGradeStudentsNames(students);
// Output: ['Eve']
```

### 8. Get the Names of Students in Uppercase

```js
getStudentNamesUppercase(students);
// Output: ['ALICE', 'BOB', 'CHARLIE', 'DAVID', 'EVE']
```

### 9. Check if Every Student Passed

```js
didAllStudentsPass(students);
// Output: false
```

### 10. Check if Any Student Scored a Perfect 100

```js
isTherePerfectScore(students);
// Output: false
```

### 11. Find the First Student Who Scored Below 60

```js
findFirstFailingStudent(students);
// Output: { name: 'David', score: 50 }
```

### 12. Count How Many Students Scored Above 70

```js
countStudentsAbove70(students);
// Output: 3
```

### 13. Group Students by Pass/Fail

```js
groupStudentsByPassFail(students);
/* Output:
{
    pass: [
        { name: 'Alice', score: 90 },
        { name: 'Charlie', score: 85 },
        { name: 'Bob', score: 75 },
        { name: 'Eve', score: 65 }
    ],
    fail: [
        { name: 'David', score: 50 }
    ]
}
*/
```

### 14. Create a Summary Object with Min, Max, and Average Score

```js
getScoreSummary(students);
/* Output:
{
    min: 50,
    max: 90,
    average: 73.00
}
*/
```

## Instructions:

-   Implement all functions in `task.js`.
-   Use JavaScript array methods like `filter`, `map`, `reduce`, and `sort` to efficiently process the data.
-   Ensure that each function returns the expected output as shown above.

## Running the Tests

1. Open a terminal in the project directory.
2. Run the following command to execute the test suite:
    ```sh
    npm run js:01
    ```
3. If your implementation is correct, you will see `All tests passed!`. If not, the errors will help identify what needs to be fixed.
