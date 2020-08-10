solution = (number) => {
  var array = []
  // create a new array of numbers that are multiples of 3 and 5
  for (let i = 1; i < number; i++) {
    array.push(i)
  }

  //create a new array if divisable by 3 or 5
  const multiplesOf = array.filter((element) => {
    if (element % 3 === 0 || element % 5 === 0) {
      return true
    }
    return false
  })
  
  // sum up array
  const sum = multiplesOf.reduce((acc, element) => {
    return acc + element
  }, 0)
  
  // return array
  return sum
}