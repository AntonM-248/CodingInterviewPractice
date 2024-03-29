function binarySearch(searchList, value) {
  const arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // search for target value
  while (searchList[middle] !== value) {
    // add current value to output array
    arrayPath.push(searchList[middle]);

    // check for value not found
    if (right < left) {
      return 'Value Not Found';
    }

    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }
  }

  // add target value to output array  
  arrayPath.push(searchList[middle]);

  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

console.log(testArray.length);
console.log(binarySearch(testArray, 0));
console.log(binarySearch(testArray, 1));
console.log(binarySearch(testArray, 2));
console.log(binarySearch(testArray, 6));
console.log(binarySearch(testArray, 11));
console.log(binarySearch(testArray, 13));
console.log(binarySearch(testArray, 70));