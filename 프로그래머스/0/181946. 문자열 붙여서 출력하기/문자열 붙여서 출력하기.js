const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ['apple', 'pen'];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    
    // 나의 풀이
    console.log(str1 + str2)
 
    // 메모, 정규표현식으로 공백을 제거하는 함수가 있음
    // str.replace(/ /g,"");
});