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


function splitter(string, split) {
  if (!string.length){
    return '';
  } 
  
  if (string[0] !== split) {
    return string[0] + splitter(string.slice(1), split); 
  } 
  
  else {
    return splitter(string.slice(1), split);
  }
}
splitter('02/20/2020', '0');