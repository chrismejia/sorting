function bubbleSort(arr) {
  let swapped = true;
  let endPoint = arr.length - 1;

  while (swapped || endPoint > 0) {
    swapped = false;
    for (let i = 0; i < endPoint; i++) {
      // let val1 = arr[i];
      // let val2 = arr[i + 1];
      console.log(i, endPoint);
    }
    endPoint--;
  }
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
