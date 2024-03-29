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

function fib(num, n=1, arr=[0,0,1]) { 
  if(num === n) { 
    return newArr[2]; 
  } 
  newArr = [arr[1], arr[2], arr[1]+arr[2]]
  return fib(num, n+1, newArr) 
} 

fib(7);



function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}



function factorial(num){
  if (num === 1){
    return num;
  }
  else{
  return num * factorial(num-1);
  }
}

factorial(5);


let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(maze, y=0, x=0, path='') {
  if (maze[y][x] === 'e') {
    return path;
  }
  else if (maze[y][x+1] === ' ' || maze[y][x+1] === 'e') {
    console.log(path);
    mazeSolver(maze, y, x+1, path+'R');
  }
  else if (maze[y+1] && (maze[y+1][x] === ' ' || maze[y+1][x] === 'e')) {
    console.log(path);
    mazeSolver(maze, y+1, x, path+'D');
  }
  else if (maze[y+1] && (maze[y-1][x] === ' ' || maze[y-1][x] === 'e')) {
    console.log(path);
    mazeSolver(maze, y-1, x, path+'U');
  }
  else if (maze[y][x-1] === ' ' || maze[y][x-1] === 'e') {
    console.log(path);
    mazeSolver(maze, y, x-1, path+'L');
  } 
}

mazeSolver(maze);