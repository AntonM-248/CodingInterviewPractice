function insertionSort(array) {
  for(let i = 1; i < array.length; i++){
    if(array[i] < array[i - 1]){
      for(let j = 0; j < i; j++){
        if(array[i] < array[j]){
          array = [...array.slice(0, j), 
            array[i], ...array.slice(j, i),
            ...array.slice(i + 1)]
          break;
        }
      }
    }
  }
  return array;
}

insertionSort([1,3,2,6,4,5])