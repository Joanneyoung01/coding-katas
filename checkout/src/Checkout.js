class Supermarket {

  calculate(input) {
    var price = {
      A: 50,
      B: 30,
      C: 20,
      D: 15
    }
    

    // take input
    var item = price[input]
    // change input into an array
    // translate each letter into a number
    // add the numbers together

    if (item === "AA") {
      return 100
    } else if (item === "AB") {
      return 80
    } else {
      return -1
    }
    
  }
}