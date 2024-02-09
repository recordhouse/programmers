function solution(number, n, m) {
    var answer = 0;

    // 'number'가 'n'의 배수 && 'm'의 배수면 
    if (number % n === 0 && number % m === 0) {
        answer = 1;
    } else {
        answer = 0;
    }

    return answer;
}