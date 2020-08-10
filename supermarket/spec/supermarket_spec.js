describe("Supermarket", function(){

  it("can calculate two items together", function(){
    var supermarket = new Supermarket
    expect(supermarket.calculate("AA")).toEqual(100);
  });

  it("should calculate offers", function(){
    var supermarket = new Supermarket
    expect(supermarket.calculate("AAA")).toEqual(130);
  });
 
});




describe("", function(){
  it("", function(){
    expect().toEqual();
  });
});