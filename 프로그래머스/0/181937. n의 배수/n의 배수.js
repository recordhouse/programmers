function solution(num, n) {
    var answer = 0;

    // 'num'에 'n'을 나누어서 0으로 떨어지면
    if (num % n === 0) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}