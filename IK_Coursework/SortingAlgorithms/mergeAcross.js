function merge_across(arr) {
  let stack = getSortedSectionsStack(arr);
  let tempStack = [];
  while(stack.length > 3) {
    let end2 = stack.pop();
    let start2 = stack.pop();
    let end = stack.pop();
    let start = stack.pop();
    merge_two_sections(start, end, start2, end2, arr);
    tempStack.push(end2);
    tempStack.push(start);
    if(stack.length == 0) {
      while(tempStack.length > 3) {
        stack.push(tempStack.pop());
        stack.push(tempStack.pop());
        stack.push(tempStack.pop());
        stack.push(tempStack.pop());
      }
    }
  }
  let start = 0;
  let end = find_end_of_sort(start, arr);
  let start2 = end + 1;
  let end2 = find_end_of_sort(start2, arr);
  if(start2 < arr.length) {
    merge_two_sections(start, end, start2, end2, arr);
  }
  return arr;
}

function getSortedSectionsStack(arr) {
  let stack = [];
  let start = 0;
  let end = find_end_of_sort(start, arr);
  let start2 = end + 1;
  let end2 = find_end_of_sort(start2, arr);
  while(start2 < arr.length) {
    stack.push(start);
    stack.push(end);
    stack.push(start2);
    stack.push(end2);
    start = end2 + 1;
    end = find_end_of_sort(start, arr);
    start2 = end + 1;
    end2 = find_end_of_sort(start2, arr);
  }
  return stack;
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

let arr = [5, 8, 3, 9, 4, 1, 7, 5, 1, 2];

console.log(merge_across(arr));