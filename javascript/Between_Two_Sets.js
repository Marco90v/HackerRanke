'use strict';

const fs = require('fs');

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    const getGCD = (n1, n2) =>{
        if (n2 == 0) {
          return n1;
        }
        return getGCD(n2, n1 % n2);
    }
    
    const getLCM = (n1, n2) => {
        if (n1 == 0 || n2 == 0)
            return 0;
        else {
            const gcd = getGCD(n1, n2);
            return Math.abs(n1 * n2) / gcd;
        }
    }

    let result = 0;

    // Get LCM of all elements of a
    let lcm = a[0];
    for (let x in a) {
        lcm = getLCM(lcm, a[x]);
    }

    // Get GCD of all elements of b
    let gcd = b[0];
    for (let x in b) {
        gcd = getGCD(gcd, b[x]);
    }

    // Count multiples of lcm that divide the gcd
    let multiple = 0;
    while (multiple <= gcd) {
        multiple += lcm;
        if (gcd % multiple == 0) result++;
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
