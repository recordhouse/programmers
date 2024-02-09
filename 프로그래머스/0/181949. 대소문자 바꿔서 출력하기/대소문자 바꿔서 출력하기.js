const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ['aBcDeFg'];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    // 사용할 문자 메서드
    // 소문자 >> 대문자
    // toUpperCase()  

    // 대문자 >> 소문자
    // toLowerCase()

    // 결과 문자열
    let resultStr = '';

    for (let i = 0; i < str.length; i++) {

        // 변경할 문자열 넣기
        let targetStr = str[i];

        // 소문자 >> 대문자로 변환
        targetStr = targetStr.toUpperCase();

        // 변환이 안되었다면(변환 전 문자열과 같을 경우)
        if (targetStr === str[i]) {

            // 대문자 >> 소문자
            targetStr = targetStr.toLowerCase();
        }

        // 문자열 담기
        resultStr += targetStr;
    }
    
    // 최종 출력
    console.log(resultStr);
    
});