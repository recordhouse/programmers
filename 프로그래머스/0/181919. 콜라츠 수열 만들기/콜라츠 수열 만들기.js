function solution(n) {
    const result = []
    let val = n
    while(val !== 1) {
        result.push(val)
        if(val%2 === 0) {
            val/=2
        } else {
            val = 3 * val + 1
        }
    }
    result.push(1)
    return result
}

// function solution(n) {
//     var answer = [];

//     let num = n;

//     answer.push(num);

//     if (num !== 1) {
//         // solution();
//     }



//     function func() {
        
//     }



//     if (num % 2 === 0 && num !== 0) {
//         num = num / 2;
//     } else {
//         num = 3 * num + 1;
//     }



//     console.log(num);


//     return answer;
// }


// solution(10);