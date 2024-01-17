function bubbleSort(array){
  for(let i = array.length; i > 0; i--){
    let swapsOccurred = false;
    for(let j = 0; j < i; j++){
      if(array[j] > array[j + 1]){
        let elementJ = array[j];
        array[j] = array[j + 1];
        array[j + 1] = elementJ;
        swapsOccurred = true;
      }
    }
    if(!swapsOccurred){
      break;
    }
  }
  return array;
}