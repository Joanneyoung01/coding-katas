class Supermarket {

  calculate(input) {
    var price = {
      A: 50,
      B: 30,
      C: 20,
      D: 15
    }

    var item = price[input]

    if (item === "AA") {
      return 100
    } else if (item === "AB") {
      return 80
    } else {
      return -1
    }
    
  }
}