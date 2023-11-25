function sym() {
  let uniqueValues = new Set();
  let firstArray = arguments[0];
  for(let num of firstArray){
    uniqueValues.add(num);
  }
  for(let i = 1; i < arguments.length; i++){
    let uniqueValuesOfArray = new Set();
    let currentArray = arguments[i];
    for(let num of currentArray){
      uniqueValuesOfArray.add(num);
    }
    uniqueValuesOfArray.forEach((n) => {
      if(uniqueValues.has(n)){
        uniqueValues.delete(n);
      }
      else if(!uniqueValues.has(n)){
        uniqueValues.add(n);
      }
    });
  }
  return Array.from(uniqueValues).sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);