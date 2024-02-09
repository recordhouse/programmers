function solution(n) {
    var answer = 0;
    var even = 0; // 짝수
    var odd = 0; // 홀수

    for (let i = 0; i <= n; i++) {

        // 짝수(짝수의 제곱의 합)
        if (i % 2 === 0) {
            even += i * i;

        // 홀수(홀수 총 더하기)
        } else {
            odd += i;
        }
    }

    // 'n'의 타입에 따라 값 할당
    answer = n % 2 === 0 ? even : odd;
    return answer;
}