'use strict';
const input = require('fs').readFileSync('test.txt').toString().split(' ');
// split : 문자열을 읽어와서 파라미터 구분자를 기준으로 배열로 바꿔줌!!
// 문자열을 배열로 만들어줌! 
// toString을 통해서 binary data를 string으로 읽어옴! 
let sum = 0;

let numArr = input.map((value, index) => {
    return Number(value);
})
console.log(numArr[0], typeof numArr[0]);