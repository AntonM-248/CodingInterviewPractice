function pairwise(arr, arg){
  let indices = new Set();
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] == arg && !indices.has(j) && !indices.has(i)){
        indices.add(i);
        indices.add(j);
      }
    }
  }
  let total = 0;
  indices.forEach((n) => total += n);
  return total;
}

pairwise([1,4,2,3,0,5], 7);