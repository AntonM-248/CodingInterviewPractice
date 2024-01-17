function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let minimumValue = Number.MAX_SAFE_INTEGER;
    let minimumIndex;
    for(let j = i; j < array.length; j++){
      if(array[j] < minimumValue){
        minimumValue = array[j];
        minimumIndex = j;
      }
    }
    if(minimumIndex != i){
      let iValue = array[i];
      array[minimumIndex] = iValue;
      array[i] = minimumValue;
    }
  }
  return array;
}