const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [4, 5];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    // 나의 풀이
    let result = '';
    
    result = input[0] + ' + ' + input[1] + ' = ';
    result += Number(input[0]) + Number(input[1]);
    
    console.log(result);
});