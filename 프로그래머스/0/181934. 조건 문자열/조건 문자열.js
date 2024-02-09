function solution(ineq, eq, n, m) {
    
    var answer = 0;
    var bln = false;
    
    // 조건 그대로 활용
    if (ineq === '>' && eq === '=') {
        bln = n >= m;
    } else if (ineq === '<' && eq === '=') {
        bln = n <= m;
    } else if (ineq === '>' && eq === '!') {
        bln = n > m;
    } else if (ineq === '<' && eq === '!') {
        bln = n < m;
    }
    
    answer = bln ? 1 : 0;
    return answer;
}