function quick_sort(arr) {
  quickSortIterative(arr, 0, arr.length - 1);
}

function quickSortPartition(arr, start, end) {
  if(start < end) {
    let pivot = end;
    let current = start;
    let index = start;
    let temp = 0;
    while(current != pivot){
      if(arr[current] < arr[pivot]) {
        temp = arr[current];
        arr[current] = arr[index];
        arr[index] = temp;
        index++;
      }
      current++;
    }
    temp = arr[pivot];
    arr[pivot] = arr[index];
    arr[index] = temp;
    quickSortPartition(arr, start, index - 1);
    quickSortPartition(arr, index + 1, end);
  } 
}

function quickSortIterative(arr, start, end) {
  let stack = [];
  stack.push(start);
  stack.push(end);
  let temp = 0;
  while(!stack.length == 0) {
    let oldEnd = stack.pop();
    let oldStart = stack.pop()
    if(oldStart < oldEnd) {
      let pivot = oldEnd;
      let mid = oldStart + Math.floor((oldEnd - oldStart) / 2);
      temp = arr[mid];
      arr[mid] = arr[pivot];
      arr[pivot] = temp;
      let current = oldStart;
      let index = oldStart;
      while(current != pivot){
        if(arr[current] < arr[pivot]) {
          temp = arr[current];
          arr[current] = arr[index];
          arr[index] = temp;
          index++;
        }
        current++;
      }
      temp = arr[pivot];
      arr[pivot] = arr[index];
      arr[index] = temp;
      stack.push(oldStart);
      stack.push(index - 1);
      stack.push(index + 1);
      stack.push(oldEnd);
    }
  }
}

let arr = [5, 8, 3, 9, 4, 1, 7];

quick_sort(arr);

console.log(arr);