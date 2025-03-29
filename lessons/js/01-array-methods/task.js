/**
 * Returns the total number of students.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {number} The total number of students.
 */
export function getNumOfStudents(students) {
    // your code here
}

/**
 * Filters students who scored 80 and above and returns an array of their names.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {string[]} An array with the names of the students who scored above 80.
 */
export function getTopStudentsNames(students) {
    // your code here
}

/**
 * Filters students who scored below 60 and returns an array of their names.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {string[]} An array with names of the students who scored below 60.
 */
export function getFailingStudentsNames(students) {
    // your code here
}

/**
 * Calculates the average score of all students.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {number} The average score of all students.
 */
export function getAverageScore(students) {
    // your code here
}

/**
 * Sorts students by their scores in descending order.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {Array<{name: string, score: number}>} A new array sorted by score.
 */
export function sortStudentsByScore(students) {
    // your code here
}

/**
 * Sorts students by their names in ascending order (A-Z).
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {Array<{name: string, score: number}>} A new array sorted by name.
 */
export function sortStudentsByName(students) {
    // your code here
}

/**
 * Finds the student with the highest score and returns their name.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {string} - The name of the student with the highest score.
 */
export function getTopScorer(students) {
    // your code here
}

/**
 * Filters students who scored between 60 and 70 and returns an array of their names.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {string[]} - Names of the students who scored between 60 and 70.
 */
export function getBGradeStudentsNames(students) {
    // your code here
}

/**
 * Checks if all students passed (scored 60 or above).
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {boolean} True if all students passed, otherwise false.
 */
export function didAllStudentsPass(students) {
    // your code here
}

/**
 * Converts all student names to uppercase.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {string[]} An array of student names in uppercase.
 */
export function getStudentNamesUppercase(students) {
    // your code here
}

/**
 * Checks if any student scored a perfect 100.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {boolean} True if at least one student scored 100, otherwise false.
 */
export function isTherePerfectScore(students) {
    // your code here
}

/**
 * Finds the first student who scored below 60.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {{name: string, score: number} | undefined} The first failing student or undefined if none.
 */
export function findFirstFailingStudent(students) {
    // your code here
}

/**
 * Counts students that scored above 70.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {number} The number of students that scored above 70.
 */
export function countStudentsAbove70(students) {
    // your code here
}

/**
 * Groups students into "pass" and "fail" categories based on their scores.
 * Students who scored 60 or above are classified as "pass", while those below 60 are classified as "fail".
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {{pass: Array<{name: string, score: number}>, fail: Array<{name: string, score: number}>}}
 */
export function groupStudentsByPassFail(students) {
    // your code here
}

/**
 * Returns a Summary Object with Min, Max, and Average Scores.
 * @param {Array<{name: string, score: number}>} students A list of students.
 * @returns {{min: number, max: number, average: number}} An object containing min, max, and average scores.
 */
export function getScoreSummary(students) {
    // your code here
}
