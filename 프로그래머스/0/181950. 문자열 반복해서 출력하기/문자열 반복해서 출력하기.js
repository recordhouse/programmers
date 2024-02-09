const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ['string', 5];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    // 초기화
    let result = '';
    
    // n의 갯수만큼 'string' 문자열 합침
    for (let i = 0; i < n; i++) {
        result += str;
    }
    
    // 결과 출력
    console.log(result);
});