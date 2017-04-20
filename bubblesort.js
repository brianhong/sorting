function bubbleSort(array, func) {
  var sortedIndex = array.length - 1;
  while(sortedIndex > 0) {

    var currIndex = 0;

    while(currIndex < sortedIndex) {
      var current = array[currIndex];

      if(current > array[currIndex + 1]) {
        swap(array, currIndex, currIndex + 1);
      }
      currIndex++;
    }
    sortedIndex--;
  }

  return array;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
