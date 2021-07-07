// const baseRNLookup = { C: 100, L: 50, X: 10, V: 5, I: 1 };
// const baseMinusOneLookUp = { LXXXX: "XC", XXXX: "XL", VIIII: "IX", IIII: "IV" };

// const convertToRomanNumerals = (num) => {
//   let result = "";
//   for (base in baseRNLookup) {
//     if (num >= baseRNLookup[base]) {
//       let places = Math.floor(num / baseRNLookup[base]);
//       for (let i = 0; i < places; i++) {
//         result += base;
//       }
//       num -= places * baseRNLookup[base];
//     }
//   }

//   for (symbol in baseMinusOneLookUp) {
//     if (result.includes(symbol)) {
//       result = result.replace(symbol, baseMinusOneLookUp[symbol]);
//     }
//   }

//   return result;
// };


const romanNumeralsLookUp = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const romanNumeralEncoder = (num) => {
  let result = "";
  for (const numeral in romanNumeralsLookUp) {
    if (num >= romanNumeralsLookUp[numeral]) {
      const roundedQuotient = Math.floor(num / romanNumeralsLookUp[numeral]);
      for (let i = 0; i < roundedQuotient; i++) {
        result += numeral;
      }
      num -= roundedQuotient * romanNumeralsLookUp[numeral];
    }
  }
  return result;
};

module.exports = { romanNumeralEncoder }
