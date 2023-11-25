let stringLength;
let permutationArray = new Array();

function permAlone(str) {
  stringLength = str.length;
  generatePermutations('', str);
  let nonRepeatingCount = 0;
  for(let permutation of permutationArray){
    if(!hasRepeatingCharacters(permutation)){
      nonRepeatingCount++;
    }
  }
  return nonRepeatingCount;
}

function generatePermutations(appendTo, removeFrom){
  for(let i = 0; i < removeFrom.length; i++){
    let newString = appendTo.concat(removeFrom.charAt(i));
    if(newString.length === stringLength){
      permutationArray.push(newString);
    }
    else{generatePermutations(newString, removeFrom.slice(0, i)
      .concat(removeFrom.slice(i + 1, removeFrom.length)));
    }
  }
}

function hasRepeatingCharacters(permutation){
    for(let i = 0; i < stringLength - 1; i++){
      if(permutation.charAt(i) === permutation.charAt(i + 1)){
        return true;
      }
    }
    return false;
}

permAlone('aab');