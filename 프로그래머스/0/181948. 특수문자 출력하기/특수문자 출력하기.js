const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    
    // 나의 풀이
    console.log('!@#$%^&*(\\' + "'\"<>?:;");
    
    // 메모
    // * 역슬래쉬 표현은 \을 추가한다(\\)
    // * 따옴표는 앞에 역슬래쉬를 추가한다
    // * 따옴표끼리 혼합이 되서 끊어줌
});