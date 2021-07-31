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

//   for (rn in baseMinusOneLookUp) {
//     if (result.includes(rn)) {
//       result = result.replace(rn, baseMinusOneLookUp[rn]);
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
  let rnstring = "";
  for (const rn in romanNumeralsLookUp) {
    while (num >= romanNumeralsLookUp[rn]) {
      rnstring += rn;
      num -= romanNumeralsLookUp[rn];
    }
  }
  return rnstring;
};

// const romanNumeralConverter = (rnstring) => {
//   const subtractors = { C: ["M", "D"], X: ["C", "L"], I: ["V", "X"] };
//   let result = 0;
//   const romanNumerals = rnstring.split("");
//   romanNumerals.forEach((rn, index) => {
//         subtractors[rn] &&
//         subtractors[rn].find((pair) => pair === romanNumerals[index + 1])
//           ? (result -= romanNumeralsLookUp[rn])
//           : (result += romanNumeralsLookUp[rn]);
//     })
//   return result;
// };

const romanNumeralConverter = (rnstring) => {
  let baseten = 0;
  const romanNumerals = rnstring.split("");
  romanNumerals.forEach((rn, i) => {
    romanNumeralsLookUp[rn + romanNumerals[i + 1]]
      ? (baseten -= romanNumeralsLookUp[rn])
      : (baseten += romanNumeralsLookUp[rn]);
  });
  return baseten;
};

module.exports = { romanNumeralEncoder, romanNumeralConverter };
