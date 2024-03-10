function solution(my_string, is_prefix) {

    let arr = [];
    let str = '';

    for (let i = 0; i < my_string.length; i++) {
        str += my_string[i];
        arr.push(str);
    }
    return arr.indexOf(is_prefix) > -1 ? 1 : 0;
}