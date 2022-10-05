'use strict';
const input = require('fs').readFileSync('test.txt').toString().split(' ');
// split : 문자열을 읽어와서 파라미터 구분자를 기준으로 배열로 바꿔줌!!
// 문자열을 배열로 만들어줌! 
// toString을 통해서 binary data를 string으로 읽어옴! 

// reduce : 배열 요소를 순서대로 불러 callback함수를 실행한 결과를 누적시킨다.!! 

// 1. 1부터 10까지 더하기! 
let arr = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
let forArr = arr.forEach((value, index) => {
    return value + 1;
})
console.log(forArr);

let mapSum = 0;
let newArr = arr.map((value, index) => {
    mapSum += value;
    // 사실 새로운 배열을 return해주지 않는다면 forEach문이랑 다를게 없어...! 
})
console.log(mapSum);

