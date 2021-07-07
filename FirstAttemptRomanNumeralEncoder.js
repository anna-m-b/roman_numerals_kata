// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  let result = "";
  const romanNumeralsLookUp = {
   1: "I",
   5: "V",
   10: "X"
  };

  // handle pure base number
  if (num === 1 || num === 5 || num === 10) return romanNumeralsLookUp[num];

  if (num > 10) {
    let remainder = num % 10
    num -= remainder
    while(num > 0) {
      result += romanNumeralsLookUp[10]
      num -= 10
    }
    if (remainder >= 5) {
      result += romanNumeralsLookUp[5]
      remainder -= 5
    }
    while (remainder > 0) {
      result += romanNumeralsLookUp[1]
      remainder -= 1
    }
    if (result.includes("XIIII")) {
      result = result.replace("IIII", "IV")
    }
    if (result.includes("XXIIII")) {
      result = result.replace("VIIII", "IX")
    }
  }

  if (num > 5 ) {
    result += romanNumeralsLookUp[5]
    num = num % 5;
    while (num > 0) {
      result += romanNumeralsLookUp[1];
      num -= 1
    }
    if (result.includes("IIII")) {
      result = result.replace("VIIII", "IX")
    }
  }



  if (num > 1) {
    while (num > 0) {
      result += romanNumeralsLookUp[1];
      num -= 1
    }
    if (result.includes("IIII")) {
      result = result.replace("IIII", "IV")
    }
  }

 

  return result;

}


const expiermentRomanNumeralEncoder = (num) => {
  const numAsArray = num.toString().split('').map(n => toNumber(n))


}

module.exports = { romanNumeralEncoder }