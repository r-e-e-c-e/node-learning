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
        expected: 5,
        description: 'getNumOfStudents should return total number of students',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getTopStudentsNames,
        args: [students],
        expected: ['Bob', 'Charlie'],
        description: 'getTopStudentsNames should return students who scored above 80',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getFailingStudentsNames,
        args: [students],
        expected: ['Fred'],
        description: 'getFailingStudentsNames should return students who scored below 60',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getAverageScore,
        args: [students],
        expected: 73.0,
        description: 'getAverageScore should return the correct average score',
        compareFn: (result, expected) => assert.strictEqual(result.toFixed(2), expected.toFixed(2)),
    },
    {
        fn: sortStudentsByScore,
        args: [students],
        expected: [
            { name: 'Alice', score: 90 },
            { name: 'Charlie', score: 85 },
            { name: 'Bob', score: 80 },
            { name: 'Chloe', score: 60 },
            { name: 'Fred', score: 59 },
        ],
        description: 'sortStudentsByScore should return students sorted by score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: sortStudentsByName,
        args: [students],
        expected: [
            { name: 'Alice', score: 90 },
            { name: 'Bob', score: 80 },
            { name: 'Charlie', score: 85 },
            { name: 'Chloe', score: 60 },
            { name: 'Fred', score: 59 },
        ],
        description: 'sortStudentsByName should return students sorted by name',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getTopScorer,
        args: [students],
        expected: 'Alice',
        description: 'getTopScorer should return the name of the student with the highest score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getBGradeStudentsNames,
        args: [students],
        expected: ['Chloe'],
        description: 'getBGradeStudentsNames should return names of students who scored between 60 and 70',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getStudentNamesUppercase,
        args: [students],
        expected: ['ALICE', 'BOB', 'CHARLIE', 'CHLOE', 'FRED'],
        description: 'getStudentNamesUppercase should return names of students in uppercase',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: didAllStudentsPass,
        args: [students],
        expected: false,
        description: 'didAllStudentsPass should return true if all students scored at least 60',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: isTherePerfectScore,
        args: [students],
        expected: false,
        description: 'isTherePerfectScore should return true if any student scored 100',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: findFirstFailingStudent,
        args: [students],
        expected: { name: 'Fred', score: 59 },
        description: 'findFirstFailingStudent should return the first student who scored below 60',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: countStudentsAbove70,
        args: [students],
        expected: 3,
        description: 'countStudentsAbove70 should return the number of students who scored above 70',
        compareFn: (result, expected) => assert.strictEqual(result, expected),
    },
    {
        fn: groupStudentsByPassFail,
        args: [students],
        expected: {
            pass: [
                { name: 'Alice', score: 90 },
                { name: 'Bob', score: 80 },
                { name: 'Charlie', score: 85 },
                { name: 'Chloe', score: 60 },
            ],
            fail: [{ name: 'Fred', score: 59 }],
        },
        description: 'groupStudentsByPassFail should group students into pass and fail categories',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
    {
        fn: getScoreSummary,
        args: [students],
        expected: {
            min: 59,
            max: 90,
            average: 73.0,
        },
        description: 'getScoreSummary should return an object with min, max, and average score',
        compareFn: (result, expected) => assert.deepStrictEqual(result, expected),
    },
];

// Running the tests for this lesson
const testName = getFolderName(import.meta.url);
runTests(testName, testCases);
