describe('Supermarket Checkout', function(){
  var market = new Supermarket

  it('it can add two items together', function(){
    expect(market.calculate("AA")).toEqual(100)
  });

  it('can return -1 if input is illegal', function(){
    expect(market.calculate("aBc")).toEqual(-1)
  })

  it('can take the input and calculate items', function(){
    expect(market.calculate("AB")).toEqual(80)
  })
});