function solution(n, control) {
    // 1.
    [...control].forEach((val, idx) => {
        switch(val) {
            case "w": n += 1
                break;
            case "s": n -= 1
                break;
            case "d": n += 10
                break
            case "a": n -= 10
        }
    })
    return n;
 }   