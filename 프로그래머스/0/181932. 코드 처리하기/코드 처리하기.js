function solution(code) {

    // 초기화
    var answer = '';
    var mode = 0;
    var ret = '';

    // code 길이만큼 반복
    for (let i = 0; i < code.length; i++) {

        // mode가 0일 때
        if (mode === 0) {

            // code[i]가 '1'이 아니고, 인덱스가 짝수일 경우 ret의 맨 뒤에 code[idx]를 추가
            if (code[i] !== '1' && i % 2 === 0) {
                ret += code[i];
            }

            // code[i]가 '1'이면 mode를 0에서 1로 변경
            mode = code[i] === '1' ? 1 : 0;
            
        // mode가 1일 때
        } else if (mode === 1) {

            // code[i]가 '1'이 아니고, 인덱스가 홀수일 경우 ret의 맨 뒤에 code[idx]를 추가
            if (code[i] !== '1' && i % 2 === 1) {
                ret += code[i];
            }

            // code[i]가 '1'이면 mode를 1에서 0로 변경
            mode = code[i] === '1' ? 0 : 1;
        }
        // console.log(i, code[i], mode, ret);
    }

    // 결과 할당, ret이 빈 문자열이면 'EMPTY' 할당
    answer = ret === '' ? 'EMPTY' : ret;
    return answer;
}