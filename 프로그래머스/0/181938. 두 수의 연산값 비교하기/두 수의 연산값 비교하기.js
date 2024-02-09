function solution(a, b) {
    var answer = 0;
    var sum = String(a) + String(b);
    var mult = 2 * a * b;

    // 덧셈이 크거나 같으면
    if (sum >= mult) {
        answer = sum;

    // 곱셈이 크다면
    } else {
        answer = mult;
    }
    return Number(answer);
}