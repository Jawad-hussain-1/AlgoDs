function removeDuplicate(arr){
    var exists ={},
        outArr = [], 
        elm;
  
    for(var i =0; i<arr.length; i++){
      elm = arr[i];
      if(!exists[elm]){
        outArr.push(elm);
        exists[elm] = true;
     }
    }
    return outArr;
  }
  console.log(removeDuplicate([9,3,9,9,9,2,6,5,2,6]));