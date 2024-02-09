function solution(a, b) {
    var answer = 0;
    var sum01 = String(a) + String(b);
    var sum02 = String(b) + String(a);

    // sum01(a)가 크거나 같다면
    if (sum01 >= sum02) {
        answer = sum01;

    // sum02(b)가 크다면
    } else {
        answer = sum02;
    }
    return Number(answer);
}