function sumFibs(num) {
    var total = 0;
    var x = 1;
    var y = 1;
    while(x <= num){
      if(y%2 !==0 && y<=num){
        total += y;
      }
      if(x % 2 !== 0 ){
        total += x;
      }
    }
   return total;
  }
  
  sumFibs(4);
  //fibonacci= 1,1,2,3,5,8,13....