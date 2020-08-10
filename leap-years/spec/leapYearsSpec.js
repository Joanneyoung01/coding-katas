describe("Leap Years", function(){

  var leapYears;

  beforeEach(function(){
    leapYears = new leaper;
  });

  it('works out if year 2000 is a leap year', function(){
    expect(leapYears.isLeapYear(2000)).toEqual(true);
  });

  it("works out if year 1970 is a leap year", function(){
    expect(leapYears.isLeapYear(1970)).toEqual(false);
  });

  it("works out if year 1900 is a leap year", function(){
    expect(leapYears.isLeapYear(1900)).toEqual(false);
  });
  
  it("works out if year 1988 is a leap year", function(){
    expect(leapYears.isLeapYear(1988)).toEqual(true);
  });
});

