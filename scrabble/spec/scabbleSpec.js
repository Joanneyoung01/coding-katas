describe('Scrabble Scorer', function() {
  var scrabble
  var blank

  beforeEach(function(){
    scrabble = new Scrabble
    blank = ""
  });

  describe('blank input is equal to 0', function(){
    expect(scrabble.score()).toEqual(0)
  });
    
});
