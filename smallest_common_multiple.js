function smallestCommons(arr) {
  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  var multiple = max;
  for(var i=max;i>=min;i--){
    if(multiple % i !== 0){
         multiple += max; 
         i = max;
    }
  }
 return multiple;  
}


smallestCommons([1,5]);

