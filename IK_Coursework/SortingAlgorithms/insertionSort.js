function insertion_sort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let red = i - 1;
    while( red >= 0 && arr[red] > temp) {
      arr[red + 1] = arr[red];
      red--;
    } 
    arr[red + 1] = temp;
  }
  return arr;
}