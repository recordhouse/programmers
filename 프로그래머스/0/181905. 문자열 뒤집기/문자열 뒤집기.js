function solution(my_string, s, e) {

    let str = my_string.slice(s, e + 1); // 자른 문자열
    let str2 = my_string.slice(0, s); // 기존 문자열
    let str3 = my_string.slice(e + 1); // 나머지 문자열
    let str4 = ''; // 반대로 변환한 문자열

    // 문자열을 뒤집어보자
    for (let i = str.length - 1; i >= 0; i--) {
        str4 += str[i];
    }

    return str2 + str4 + str3;
}