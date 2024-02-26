function solution(num_list) {
    var answer = num_list;
    
    var val01 = num_list[num_list.length - 1]; // 마지막 원소
    var val02 = num_list[num_list.length - 2]; // 그 전 원소
    
    // 마지막 원소가 그전 원소보다 크면
    if (val01 > val02) {
        answer.push(val01 - val02);
        
    } else {
        answer.push(val01 * 2);
    }
    return answer;
}


solution([5, 2, 1, 7, 5]);