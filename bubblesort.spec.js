describe('Bubble Sort', function(){

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles sorting single item', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles sorting multiple items', function() {
    expect( bubbleSort( [123, 21, 34, 45, 25, 675, 23, 44, 55, 900] )).toEqual(
        [21, 23, 25, 34, 44, 45, 55, 123, 675, 900] );
  });

});
