// SWAP FUNCTION - global helper func
// set swapped = true
// does swap of values in arr

function swap(idx1, idx2, arr) {
  // bubbleSort if statement already determines val1 > val2
  // do the swap; run in for loop; can access indices of array

  // Using a temp variable
  // 1. Store the first value in a var
  const temp = arr[idx1];
  // 2. Set 1st val to 2nd val
  arr[idx1] = arr[idx2];
  // 3. Set 2nd val to temp val (original first val)
  arr[idx2] = temp;

  // De-structuring
  // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr) {
  // default for swapped - allows for while loop entry
  let swapped = true;
  let endPoint = arr.length - 1;

  // While there has been a swap done to the array...
  while (swapped) {
    // swap helper triggers change to true on swap
    swapped = false;

    // looping through items of array
    for (let i = 0; i < endPoint; i++) {
      let val1 = arr[i];
      let val2 = arr[i + 1];

      // If val1 is greater than val 2...
      if (val1 > val2) {
        //...do the swap function on these two values...
        swap(i, i + 1, arr);
        //...and assign swapped to true to trigger the while loop again.
        swapped = true;
      }
      // console.log(i, endPoint); //=> WORKS
    }
    endPoint--;
  }
  // Breaks out of the while loop at swapped = false; we are done
  // return array
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
