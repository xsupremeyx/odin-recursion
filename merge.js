const solvemergeSort = (arr, s = 0, e = arr.length - 1) => {
    if (s >= e) return [arr[s]];
    else{
        const mid = Math.floor((s + e) / 2);
        const left = solvemergeSort(arr, s, mid);
        const right = solvemergeSort(arr, mid + 1, e);
        return merge(left, right);
    }
}

const merge = (left, right) => {
    const merged = [];
    const leftSize = left.length;
    const rightSize = right.length;
    let i = 0, j = 0;
    for (; i < leftSize && j < rightSize;) {
        if(left[i] <= right[j]){
            merged.push(left[i++])
        }
        else if(left[i] > right[j]){
            merged.push(right[j++])
        }
    }
    for(;i < leftSize;i++){
        merged.push(left[i]);
    }
    for(;j < rightSize;j++){
        merged.push(right[j]);
    }
    return merged;
}



const mergeSort = (arr) => {
    if(arr.length === 0) return [];
    return solvemergeSort(arr);
}

export {mergeSort};