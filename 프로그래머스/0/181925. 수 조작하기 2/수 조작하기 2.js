function solution(log) {
    let result = "";
    for(let i=0; i<log.length; i++){
        const n = log[i+1]-log[i];
        switch(n){
            case 1: result += "w"; break;
            case -1: result += "s"; break;
            case 10: result += "d"; break;    
            case -10: result += "a"; break;
        }    
    }
    return result;
}
// function solution(numLog) {

//     var answer = '';
//     var result = numLog[0];

//     for (let i = 1; i < numLog.length; i++) {
        
//         // "a" : 수에 10을 뺀다.
//         if (result - numLog[i] === 10) {
//             answer += 'a';

//         // "d" : 수에 10을 더한다.
//         } else if (result + numLog[i] === 10) {
//             answer += 'd';

//         // "s" : 수에 1을 뺀다.
//         } else if (result > numLog[i]) {
//             answer += 's';

//         // "w" : 수에 1을 더한다.
//         } else if (result < numLog[i]) {
//             answer += 'w';
//         }

//         result = numLog[i];
//     }

//     console.log(answer);
    
//     return answer;
// }