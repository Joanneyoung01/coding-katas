
describe("Ten Min Walk", function(){

  var walker
  var array1
  var array2
  var array3
  var array4

  beforeEach(function () {
    walker = new Walker;
    array1 = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']
    array2 = ['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']
    array3 = ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']
    array4 = ['w', 's']
  });

  it("returns true if the are 10 inputs and ends up in location and it ends in the first location", function(){
    expect(walker.isTenMinWalk(array1)).toEqual(true);
  });

  it("returns false if there is 10 moves but does not end in start location", function(){
    expect(walker.isTenMinWalk(array2)).toEqual(false);
  });

  it("returns false if there is 10 moves but does not end in start location", function(){
    expect(walker.isTenMinWalk(array3)).toEqual(false);
  });

  it("returns false if there is 10 moves but does not end in start location", function(){
    expect(walker.isTenMinWalk(array3)).toEqual(false);
  });



})


