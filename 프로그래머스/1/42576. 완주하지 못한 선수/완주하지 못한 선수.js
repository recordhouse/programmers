function solution(participant, completion) {
  let answer = "";

  // 동명이인이 있을 수 있기 때문에, 각 배열을 이름순으로 정렬
  participant.sort();
  completion.sort();

  // 루프를 돌며 이름이 일치하지 않을 경우 결과를 담고 리턴
  for (let i = 0; i < participant.length; i++) {
      
    if (participant[i] !== completion[i]) {
        
      answer = participant[i];
      break;
    }
      
  }

  return answer;
}