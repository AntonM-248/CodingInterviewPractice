function updateInventory(arr1, arr2) {
  for(let subArr2 of arr2){
    for(let subArr1 of arr1){
      if(subArr1[1] == subArr2[1]){
        subArr2[0] = subArr2[0] + subArr1[0];
        break;
      }
    }
  }
  for(let subArr1 of arr1){
    let matchFound = false;
    for(let subArr2 of arr2){
      if(subArr1[1] == subArr2[1]){
        matchFound = true;
        break;
      }
    }
    if(!matchFound){
      arr2.push(subArr1);
    }
  }
  arr2 = arr2.sort(compareSubArrays)
  return arr2;
}

function compareSubArrays(subArr1, subArr2){
  return subArr1[1].localeCompare(subArr2[1]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);