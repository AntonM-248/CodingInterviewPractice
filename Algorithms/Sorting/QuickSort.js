function quickSort (array) {
  if (array.length > 1) {
    let indexOfPivot = getIndexOfPivot(array);
    let pivot = array[indexOfPivot];
    swapTwoIndices(indexOfPivot, array.length - 1, array);
    let largerFromLeftIndex = getLargerFromLeft(pivot, array);
    let lesserFromRightIndex = getLesserFromRight(pivot, array);
    while(largerFromLeftIndex < lesserFromRightIndex){
      swapTwoIndices(largerFromLeftIndex, lesserFromRightIndex, array);
      largerFromLeftIndex = getLargerFromLeft(pivot, array);
      lesserFromRightIndex = getLesserFromRight(pivot, array);
    }
    swapTwoIndices(array.length - 1, largerFromLeftIndex, array);
    let firstHalfOfArray = quickSort(array.slice(0, largerFromLeftIndex)).concat(pivot);
    let secondHalfOfArray = quickSort(array.slice(largerFromLeftIndex + 1, array.length));
    array = firstHalfOfArray.concat(secondHalfOfArray);
  }
  return array;
}

function getLargerFromLeft (pivot, array) {
  let index = 0;
  while(array[index] < pivot){
    index++;
  }
  return index;
}

function getLesserFromRight (pivot, array) {
  let index = array.length - 2;
  while(array[index] > pivot){
    index--;
  }
  return index;
}

function getIndexOfPivot (array) {
  let first = array[0];
  let last = array[array.length - 1];
  let mid = array[Math.floor(array.length / 2)];
  if(first <= mid && mid <= last){
    return Math.floor(array.length / 2);
  }
  else if ( mid <= last && last <= mid) {
    return array.length - 1;
  }
  else {
    return 0;
  }
}

function swapTwoIndices (index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(quickSort([2,6,5,3,8,7,1,0]));
console.log(Math.floor(3 / 2));