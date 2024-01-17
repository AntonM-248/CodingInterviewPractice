function hope_sort(arr) {
  let start = 0;
  let end = find_end_of_sort(0, arr);
  let start2 = end + 1;
  let end2 = find_end_of_sort(start2, arr);
  while(end2 < arr.length) {
    merge_two_sections(start, end, start2, end2, arr);
    end = end2;
    start2 = end + 1;
    end2 = find_end_of_sort(start2, arr);
  }
  return arr;
}

function merge_two_sections(start, end, start2, end2, arr) {
  let merged_section = new Array(end2 - start + 1);
  let merge_index = 0;
  let original_start = start;
  while(start <= end && start2 <= end2) {
    if(arr[start] < arr[start2]) {
      merged_section[merge_index] = arr[start];
      start++;
    }
    else if(arr[start2] <= arr[start]) {
      merged_section[merge_index] = arr[start2];
      start2++;
    }
    merge_index++;
  }
  while(start <= end) {
    merged_section[merge_index] = arr[start];
    start++;
    merge_index++;
  }
  while(start2 <= end2) {
    merged_section[merge_index] = arr[start2];
    start2++;
    merge_index++;
  }
  for(let i = 0; i < merged_section.length; i++) {
    arr[original_start] = merged_section[i];
    original_start++;
  }
}

function find_end_of_sort(start, arr) {
  while(start < arr.length - 1 && arr[start] < arr[start + 1]) {
    start++;
  }
  return start;
}

let arr = [5, 8, 3, 9, 4, 1, 7];

console.log(hope_sort(arr));