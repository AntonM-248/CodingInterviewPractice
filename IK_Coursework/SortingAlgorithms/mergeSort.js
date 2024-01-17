function merge_sort(arr) {
  mergeSection(arr, 0, arr.length - 1);
}

function mergeSection(arr, start, end) {
  numCalls++;
  console.log(numCalls);
  if(start == end){
    return;
  }
  let mid = Math.floor((start + end) / 2);
  mergeSection(arr, start, mid);
  mergeSection(arr, mid + 1, end);
  let i = start;
  let j = mid + 1;
  let aux = [];
  while(i <= mid && j <= end) {
    if(arr[i] <= arr[j]) {
      aux.push(arr[i]);
      i++;
    }
    else {
      aux.push(arr[j]);
      j++;
    }
  }
  while(i <= mid){
    aux.push(arr[i]);
    i++;
  }
  while(j <= end) {
    aux.push(arr[j]);
    j++;
  }
  let k = 0;
  while(start <= end) {
    arr[start] = aux[k];
    start++;
    k++;
  }
  return;
}

let numCalls = 0;

let arr = [5, 8, 3, 9, 4, 1, 7];

merge_sort(arr);
console.log(arr);
