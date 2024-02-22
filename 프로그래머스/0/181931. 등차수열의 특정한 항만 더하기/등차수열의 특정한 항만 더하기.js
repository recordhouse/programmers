function solution(a, d, length) {
    let result = 0;
    length.forEach(e => {
            result = e ? result + a : result;
            a = a + d;
    });
    return result;
}