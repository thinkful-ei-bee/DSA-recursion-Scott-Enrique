function countSheep(num){
    if(num < 1){
      console.log( "all sheep have jumped over the fence", num)
      return;
    } else{
      console.log('another sheep have jumped over the fence', num)
      return countSheep(num - 1);
    }
  }

  countSheep(3)

  function powerCalculator(num, exp){
    if(exp < 0 ){
      return "exponent should be >= 0"
    }
    if(exp === 0){
      return 1;
    }else{
      return num*powerCalculator(num, exp-1);
    }
  }
  powerCalculator(10,1)