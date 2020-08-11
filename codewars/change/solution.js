function expandedForm(num) {  

  const thousands = num / 1000
  const remainder = num % 1000
  const hundreds = remainder / 100
  const hundredsRemainder = remainder % 100
  const tens = hundredsRemainder / 10
  const units = hundredsRemainder % 10
  
  const array = [Math.floor(thousands) * 1000, Math.floor(hundreds) * 100, Math.floor(tens) * 10, Math.floor(units) * 1]
  
  const filtered = array.filter((element) => {
    return element > 0
  })
  
  return filtered.join (" + ")

}
