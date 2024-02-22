function solution(a, b, c) {
    
    var answer = 0;
    
    // 세 숫자가 모두 다르다면
    if (a !== b && a !== c && b !== c) {
        answer = a + b + c;
        
    // 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 
    } else if (a === b && a !== c || a === c && b !== c || b === c && a !== b) {
        answer = (a + b + c) * (a * a + b * b + c * c);
        
    // 세 숫자가 모두 같다면
    } else if (a === b && a === c && b === c) {
        answer = (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
    }
    
    return answer;
}