describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4,5])).toEqual([[1,2], [3,4,5]]);
  });

  it('is able to handle empty array', function() {
    expect(split([])).toEqual([]);
  });

  it('is able to handle single arrays', function() {
    expect(split([1])).toEqual([1]);
  });
});

describe('merge', function(){
  it('is able to merge two arrays', function(){
    expect(merge( [3, 5, 10], [2, 8, 10, 19, 65] )).
                        toEqual([2, 3, 5, 8, 10, 10, 19, 65]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });

  it('works properly for empty arrays', function() {
    // test empty array sort
  });

  it('sorts array properly', function() {
    expect( mergeSort( [123, 21, 34, 45, 25, 675, 23, 44, 55, 900] )).toEqual([21, 23, 25, 34, 44, 45, 55, 123, 675, 900] );
  });
});
