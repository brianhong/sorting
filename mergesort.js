function split(wholeArray) {
  if(wholeArray.length <= 1) {
    return wholeArray;
  }
  var firstHalf = wholeArray.slice(0, wholeArray.length/2);
  var secondHalf = wholeArray.slice(wholeArray.length/2);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var result = [];

  // while(arr1.length && arr2.length) {
  //   if(arr1[0] < arr2[0]) {
  //     result.push(arr1.shift());
  //   }
  //   else {
  //     result.push(arr2.shift());
  //   }
  // }

  var indexOne = indexTwo = 0;

  while(indexOne < arr1.length && indexTwo < arr2.length) {
    if(arr1[indexOne] < arr2[indexTwo]) {
      result.push(arr1[indexOne]);
      indexOne++;
    }
    else {
      result.push(arr2[indexTwo]);
      indexTwo++;
    }
  }

  // var remaining;
  // if(arr1.length) {
  //   remaining = arr1;
  // }
  // else if(arr2.length) {
  //   remaining = arr2;
  // }
  // if(remaining) {
  //   result = result.concat(remaining);
  // }

  if(indexOne < arr1.length) {
    for(var i = indexOne; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }
  else {
    for(var i = indexTwo; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  }

  return result;
}

function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  var dividedArr = split(array);
  return merge(mergeSort(dividedArr[0]), mergeSort(dividedArr[1]));
}
