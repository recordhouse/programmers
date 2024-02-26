function solution(arr, queries) {

    // 주의할 부분이 answer를 []로 선언하면 초기의 배열 인덱스를 구분하지 못해서 꼭 배열 파라미터를 넣어준다.
    var answer = arr;
    
    queries.forEach((queriesArr) => {

        // 각 queries 아이템이 가지고 있는 인덱스를 arr배열에서 뽑아서 num 변수에 저장해놈 
        var num01 = arr[queriesArr[0]];
        var num02 = arr[queriesArr[1]];

        // 기존 arr 배열에 순서를 바꿔서 대입
        answer[queriesArr[0]] = num02;        
        answer[queriesArr[1]] = num01;
    });
    
    // 결과 출력
    console.log(answer);
    
    return answer;
}


