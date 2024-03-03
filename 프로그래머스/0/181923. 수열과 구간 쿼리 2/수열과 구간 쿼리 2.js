function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [to, from, val] = cur
        const range = arr.slice(to, from+1)
        const biggerThan = range.filter(a => a > val)
        if(!biggerThan.length) return [...acc, -1]
        return [...acc, Math.min(...biggerThan)]
    }, [])
}


// function solution(arr, queries) {
//     var answer = [];

//     queries.forEach((queriesArr, idx) => {

//         var s = queriesArr[0];
//         var e = queriesArr[1];
//         var k = queriesArr[2];

//         // arr 배열 순회(역순)
//         for (let i = arr.length - 1; i >= 0; i--) {

//             // s ≤ i ≤ e인 모든 i
//             if (idx >= s && idx <= e) {

//                 if (arr[i] > k) {

//                     answer.push(arr[i]);
//                     continue;

//                 } else {
//                     answer.push(-1);
//                     if (i === 0) {
//                         return;
//                     }
//                 }
//             }

//         }


//     });

//     console.log(answer);


//     return answer;
// }


// // solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]);
// // solution([0, 1, 2, 4, 3], [[0, 4, 2]]);
// solution([0, 1, 2, 4, 3], [[0, 3, 2]]);