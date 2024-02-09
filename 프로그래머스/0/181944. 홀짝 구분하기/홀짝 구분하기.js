const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [100];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    
      // 결과값 초기화
    let result = n + ' is odd';
    
    // 해당 숫자를 2로 나누었을 때 나머지가 없으면
    if (n % 2 === 0) {
        result = n + ' is even';
    }
    
    // 결과 출력
    console.log(result);
    
});