import {
    getAverageScore,
    getTopStudentsNames,
    getFailingStudentsNames,
    sortStudentsByScore,
    getTopScorer,
    getBGradeStudentsNames,
    getNumOfStudents,
    sortStudentsByName,
    getStudentNamesUppercase,
    didAllStudentsPass,
    isTherePerfectScore,
    findFirstFailingStudent,
    countStudentsAbove70,
    groupStudentsByPassFail,
    getScoreSummary,
} from './task.js';
import { Solution } from '../../../solutions/js/01-array-methods/solution.js';
import { getFolderName, runTests } from '../../../utils/index.js';
import assert from 'assert';

const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 80 },
    { name: 'Charlie', score: 85 },
    { name: 'Chloe', score: 60 },
    { name: 'Fred', score: 59 },
];

const testCases = [
    {
        fn: getNumOfStudents,
        args: [students],
        expected: Solution.getNumOfStudents(students),
        description: 'getNumOfStudents should return total number of students',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getTopStudentsNames,
        args: [students],
        expected: Solution.getTopStudentsNames(students),
        description: 'getTopStudentsNames should return students who scored above 80',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getFailingStudentsNames,
        args: [students],
        expected: Solution.getFailingStudentsNames(students),
        description: 'getFailingStudentsNames should return students who scored below 60',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getAverageScore,
        args: [students],
        expected: Solution.getAverageScore(students),
        description: 'getAverageScore should return the correct average score',
        compareFn: (result, expected) => assert.strictEqual(result.toFixed(2), expected.toFixed(2)),
    },
    {
        fn: sortStudentsByScore,
        args: [students],
        expected: Solution.sortStudentsByScore(students),
        description: 'sortStudentsByScore should return students sorted by score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: sortStudentsByName,
        args: [students],
        expected: Solution.sortStudentsByName(students),
        description: 'sortStudentsByName should return students sorted by name',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getTopScorer,
        args: [students],
        expected: Solution.getTopScorer(students),
        description: 'getTopScorer should return the name of the student with the highest score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getBGradeStudentsNames,
        args: [students],
        expected: Solution.getBGradeStudentsNames(students),
        description: 'getBGradeStudentsNames should return names of students who scored between 60 and 70',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getStudentNamesUppercase,
        args: [students],
        expected: Solution.getStudentNamesUppercase(students),
        description: 'getStudentNamesUppercase should return names of students in uppercase',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: didAllStudentsPass,
        args: [students],
        expected: Solution.didAllStudentsPass(students),
        description: 'didAllStudentsPass should return true if all students scored at least 60',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: isTherePerfectScore,
        args: [students],
        expected: Solution.isTherePerfectScore(students),
        description: 'isTherePerfectScore should return true if any student scored 100',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: findFirstFailingStudent,
        args: [students],
        expected: Solution.findFirstFailingStudent(students),
        description: 'findFirstFailingStudent should return the first student who scored below 60',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: countStudentsAbove70,
        args: [students],
        expected: Solution.countStudentsAbove70(students),
        description: 'countStudentsAbove70 should return the number of students who scored above 70',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: groupStudentsByPassFail,
        args: [students],
        expected: Solution.groupStudentsByPassFail(students),
        description: 'groupStudentsByPassFail should group students into pass and fail categories',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getScoreSummary,
        args: [students],
        expected: Solution.getScoreSummary(students),
        description: 'getScoreSummary should return an object with min, max, and average score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
];

// Running the tests for this lesson
const testName = getFolderName(import.meta.url);
runTests(testName, testCases);
