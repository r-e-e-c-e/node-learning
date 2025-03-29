// Okay, so here's the input:
// const students = [
//     { name: 'Alice', score: 90 },
//     { name: 'Bob', score: 80 },
//     { name: 'Charlie', score: 85 },
//     { name: 'Chloe', score: 60 },
//     { name: 'Fred', score: 59 },
// ];

/**
 * Filters students who scored 80 and above and returns an array of their names.
 * Like, only the super smart kids, right? 🧠
 * @param {Array<{name: string, score: number}>} students - A list of the brainiacs, aka student objects.
 * @returns {string[]} - An array with the names of the students who scored above 80.
 */
export function getTopStudentsNames(students) {
    return students.filter(student => student.score > 80).map(student => student.name);
}

/**
 * Filters students who scored below 60 and returns an array of their names.
 * So, these are the kids who *might* need some extra tutoring. 😬
 * @param {Array<{name: string, score: number}>} students - A list of students, like, just try to pass, okay?
 * @returns {string[]} - An array with names of the students who scored below 60.
 */
export function getFailingStudentsNames(students) {
    return students.filter(student => student.score < 60).map(student => student.name);
}

/**
 * Calculates the average score of all students.
 * Like, let's just see how everyone did, you know? We gotta know the vibes. 📊
 * @param {Array<{name: string, score: number}>} students - A list of all students.
 * @returns {number} - The average score of all students, so we can see how well we're doing!
 */
export function getAverageScore(students) {
    const total = students.reduce((sum, student) => sum + student.score, 0);
    return parseFloat((total / students.length).toFixed(2));
}

/**
 * Sorts students by their scores in descending order.
 * Gotta know who's on top, duh! 📈👑
 * @param {Array<{name: string, score: number}>} students - A list of students to sort.
 * @returns {Array<{name: string, score: number}>} - A brand new array, all sorted and pretty by score.
 */
export function sortStudentsByScore(students) {
    return [...students].sort((a, b) => b.score - a.score);
}

/**
 * Finds the student with the highest score and returns their name.
 * So, like, who's the genius of the class? 🤓
 * @param {Array<{name: string, score: number}>} students - The crew of students, but we just wanna know who's on top.
 * @returns {string} - The name of the student with the highest score, the real MVP.
 */
export function getTopScorer(students) {
    const topStudent = students.reduce((max, student) => (student.score > max.score ? student : max), students[0]);
    return topStudent.name;
}

/**
 * Filters students who scored between 60 and 70 and returns an array of their names.
 * Ugh, the "B" grade peeps – like, not bad, but still... could be better. 💁‍♀️
 * @param {Array<{name: string, score: number}>} students - The list of students who are kinda okay-ish.
 * @returns {string[]} - Names of the students who scored between 60 and 70. Not too shabby, but not an A. 😅
 */
export function getBGradeStudentsNames(students) {
    return students.filter(student => student.score >= 60 && student.score <= 70).map(student => student.name);
}
