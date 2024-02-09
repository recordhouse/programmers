const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ['abcde'];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    // 결과 문자열
    let result = '';
    
    // 문자열 돌면서 줄바꿈 추가
    for (let i = 0; i < str.length; i++) {
        result += str[i] + '\n';
    }
    
    // 결과 출력
    console.log(result);
});