class Walker {

  isTenMinWalk(input) {
    var arr = input

    var x = 0;
    var y = 0;

    for (var i = 0; i <= arr.length; i++) {
      switch(input[i]) {
        case "w":
          x -= 1;
          break;
        case "s":
          y -= 1;
          break;
        case "n":
          y += 1;
          break;
        case "e":
          x += 1;
          break;  
      }
    }

    console.log(input)
    if (input.length === 10 && x == 0 && y == 0) {
      return true
    } else {
      return false
    }
  }
}