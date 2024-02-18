// 등차수열이란 첫번째 항부터 하나씩 더해지는 수열
// 공차란 등차수열의 변화 값

function solution(a, d, included) {

    // 초기화
    var answer = 0;

    // 등차수열의 합(초기에는 a(초기값) 대입)
    var sum = a;

    included.forEach((bln, idx) => {

        // included[idx]가 참이면 누적값 더함
        answer += bln ? sum : 0;

        // 등차수열 만들기
        sum += d;
    });

    return answer;
}