function solution(my_strings, parts) {
    var answer = '';

    my_strings.forEach((str, idx) => {
        answer += str.slice(parts[idx][0], parts[idx][1] + 1);
    });

    return answer;
}