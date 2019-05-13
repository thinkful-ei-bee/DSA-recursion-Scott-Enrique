'use strict';

function countSheep(num){
  if(num < 1){
    console.log( 'all sheep have jumped over the fence', num);
    return;
  } else{
    console.log('another sheep have jumped over the fence', num);
    return countSheep(num - 1);
  }
}
countSheep(3);


function powerCalculator(num, exp){
  if(exp < 0 ){
    return 'exponent should be >= 0';
  }
  if(exp === 0){
    return 1;
  }else{
    return num*powerCalculator(num, exp-1);
  }
}
powerCalculator(10,1);


function reverseString(string) {
  if(!string.length) {
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0,-1));
}
reverseString('abc');

function triNum(num, n=0) {
  if (n === num) {
    return n;
  } else {
    return n + triNum(num, n+1);
  }
}
triNum(9);