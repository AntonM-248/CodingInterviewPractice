function bubble_sort(arr) {
  for(let i = arr.length; i > -1; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

let arr = [5, 8, 3, 9, 4, 1, 7];

console.log(bubble_sort(arr));