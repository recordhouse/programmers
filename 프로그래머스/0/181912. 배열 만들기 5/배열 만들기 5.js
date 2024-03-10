function solution(intStrs, k, s, l) {
    var answer = [];

    intStrs.forEach((num) => {

        // s번 인덱스 ~ l짜리 부분 문자열을 잘라냄
        let result = Number(num.slice(s, s + l));

        if (result > k) {
            answer.push(result);
            console.log(result);
        }
    });
    return answer;

}