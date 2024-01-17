function mergeSort(array) {
  if(array.length == 1){
    return array;
  } 
  else {
    let array1 = array.slice(0, Math.ceil(array.length / 2));
    let array2 = array.slice(Math.ceil(array.length / 2));
    array1 = mergeSort(array1);
    array2 = mergeSort(array2);
    return merge(array1, array2);
  }
}

function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let resultArray = new Array();
  while(i < array1.length || j < array2.length) {
    if(i >= array1.length) {
      resultArray.push(array2[j]);
      j++;
    }
    else if(j >= array2.length) {
      resultArray.push(array1[i]);
      i++;
    }
    else if(array1[i] <= array2[j]) {
      resultArray.push(array1[i]);
      i++;
    }
    else if(array2[j] <= array1[i]) {
      resultArray.push(array2[j]);
      j++;
    }
  }
  return resultArray;
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));