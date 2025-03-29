import {
    getAverageScore,
    getTopStudentsNames,
    getFailingStudentsNames,
    sortStudentsByScore,
    getTopScorer,
    getBGradeStudentsNames,
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
        description: 'getBGradeStudentsNames should return names of students students who scored between 60 and 70',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
];

// Running the tests for this lesson
const testName = getFolderName(import.meta.url);
runTests(testName, testCases);
