function solution(my_string, overwrite_string, s) {

    // 결과값
    var answer = '';

    // 왼쪽에 붙일 문자열
    var leftStr = my_string.substr(0, s);

    // 오른쪽에 붙일 문자열
    var rightStr = '';

    // 'overwrite_string'의 길이와 's'의 값을 합친 길이부터 'my_string'의 남은 문자열을 가져옴
    rightStr = my_string.substr(overwrite_string.length + s, my_string.length);

    // 결과값 모두 더하고 리턴
    answer += leftStr + overwrite_string + rightStr;
    return answer;
}