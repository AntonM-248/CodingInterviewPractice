function selection_sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minimumIndex = i + 1;
        let minimumValue = arr[i + 1];
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < minimumValue) {
                minimumIndex = j;
                minimumValue = arr[j];
            }
        }
        if(arr[i] > arr[minimumIndex]) {
            let temp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = temp;
        }
    }
    return arr;
}    

let arr = [5, 8, 3, 9, 4, 1, 7];

console.log(selection_sort(arr));