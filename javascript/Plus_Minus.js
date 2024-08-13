'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const total = arr.length
    let positive = 0
    let negative = 0
    let zero = 0
    arr.forEach(e => {
        if (e > 0) positive++
        if (e < 0) negative++
        if (e === 0) zero++
    });
    positive = (positive /= total).toFixed(6)
    negative = (negative /= total).toFixed(6)
    zero = (zero /= total).toFixed(6)

    console.log(positive)
    console.log(negative)
    console.log(zero)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
