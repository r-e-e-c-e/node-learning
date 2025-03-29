import chalk from 'chalk';
import gradient, { instagram, rainbow } from 'gradient-string';
import path from 'path';

const message = `┏┓┓┓       
┣┫┃┃       
┛┗┗┗       
╋┏┓┏╋┏     
┗┗ ┛┗┛   ┓╻
┏┓┏┓┏┏┏┓┏┫┃
┣┛┗┻┛┛┗ ┗┻•
┛          `;

const linePrefix = chalk.grey('│  ');
const lineStart = chalk.grey('┌─');
const lineEnd = chalk.grey('└─');

export function logTaskFail(description, expected, received) {
    console.log();
    console.log(lineStart);
    console.log(`${linePrefix}${chalk.red.bold('✖ Test failed:')} ${chalk.white.bold(description)}`);
    console.log(linePrefix);

    console.log(`${linePrefix}${chalk.yellow('Expected:')}`);
    if (typeof expected === 'object' && expected !== null) {
        // For objects and arrays, use JSON.stringify with indentation
        const formattedExpected = JSON.stringify(expected, null, 2)
            .split('\n')
            .map(line => `${linePrefix}${line}`)
            .join('\n');
        console.log(formattedExpected);
    } else {
        // For primitive types (string, number, boolean, etc.)
        console.log(`${linePrefix}${expected}`);
    }
    console.log(linePrefix);

    console.log(`${linePrefix}${chalk.blue('Received:')}`);
    if (typeof received === 'object' && received !== null) {
        // For objects and arrays, use JSON.stringify with indentation
        const formattedReceived = JSON.stringify(received, null, 2)
            .split('\n')
            .map(line => `${linePrefix}${line}`)
            .join('\n');
        console.log(formattedReceived);
    } else {
        // For primitive types (string, number, boolean, etc.)
        console.log(`${linePrefix}${received}`);
    }

    console.log(lineEnd);
}

export function logTaskPass(description) {
    console.log(`${chalk.green.bold('✔ Test passed:')} ${chalk.white.bold(description)}`);
}

export function logLessonSuccess() {
    console.log(gradient(['lime', 'green'], { interpolation: 'hsv' }).multiline(message));
}

export function getFolderName(url) {
    const currentDir = path.dirname(new URL(url).pathname);
    const currentFolderName = path.basename(currentDir);
    return currentFolderName;
}

export function runTests(testName, testCases) {
    console.log();
    console.log(chalk.bold.underline(instagram(`Running tests for ${testName}`)));
    console.log();

    let allPassed = true;
    let failedTests = [];

    for (const { fn, args, expected, description, compareFn } of testCases) {
        try {
            const result = fn(...args);
            compareFn(result, expected);
            logTaskPass(description);
        } catch (error) {
            allPassed = false;
            failedTests.push({ description, expected, received: fn(...args) });
        }
    }

    if (allPassed) {
        logLessonSuccess();
    } else {
        failedTests.forEach(({ description, expected, received }) => {
            logTaskFail(description, expected, received);
        });
        console.log();
        console.log(
            chalk.bgRed.bold(
                ` --- ${failedTests.length} test${failedTests.length === 1 ? '' : 's'} failed in ${testName}! --- `
            )
        );
        console.log();
    }
}
