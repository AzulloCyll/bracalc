const {
  underbustArr,
  underbustNames,
  underbustSpanArr,
  bustNames,
} = require("./data");

const {
  getUnderbustIndex,
  getUnderbustaArrayToSearch,
  getBustIndex,
  getUnderBustName,
  getBustNames,
  combineSizeName,
} = require("./functions");

const { sizes } = require("./sizes");

const gorteks =
  "https://www.gorteks.com.pl/Kalkulator-rozmiaru-cabout-pol-138.html";

const detectBraSizeName = (underbust, bust) => {
  const underbustIndex = getUnderbustIndex(underbust, underbustArr);
  const underbustaArrayToSearch = getUnderbustaArrayToSearch(
    underbustIndex,
    underbustSpanArr
  );
  const bustIndex = getBustIndex(bust, underbustaArrayToSearch);
  const underbustSize = getUnderBustName(underbustIndex, underbustNames);
  const bustSize = getBustNames(bustIndex, bustNames);

  const detectedNames = combineSizeName(underbustSize, bustSize);

  return detectedNames;
};

const detectBiggerSizeName = (underbust, bust) => {
  let underbustIndex = getUnderbustIndex(underbust, underbustArr);
  underbustIndex++;
  bust += 3;

  if (underbustIndex >= 0) {
    const underbustaArrayToSearch = getUnderbustaArrayToSearch(
      underbustIndex,
      underbustSpanArr
    );

    let bustIndex = getBustIndex(bust, underbustaArrayToSearch);

    const underbustSize = getUnderBustName(underbustIndex, underbustNames);
    const bustSize = getBustNames(bustIndex, bustNames);
    const detectedNames = combineSizeName(underbustSize, bustSize);

    return detectedNames;
  }
};

const detectSmallerSizeName = (underbust, bust) => {
  let underbustIndex = getUnderbustIndex(underbust, underbustArr);
  underbustIndex--;
  bust -= 3;

  if (underbustIndex >= 0) {
    const underbustaArrayToSearch = getUnderbustaArrayToSearch(
      underbustIndex,
      underbustSpanArr
    );

    let bustIndex = getBustIndex(bust, underbustaArrayToSearch);

    const underbustSize = getUnderBustName(underbustIndex, underbustNames);
    const bustSize = getBustNames(bustIndex, bustNames);
    const detectedNames = combineSizeName(underbustSize, bustSize);

    return detectedNames;
  }
};

const underbust = 70;
const bust = 89;

const detected = detectBraSizeName(underbust, bust);
const detectedSmaller = detectSmallerSizeName(underbust, bust);
const detectedBigger = detectBiggerSizeName(underbust, bust);

console.log("smaller: " + detectedSmaller);
console.log("straight: " + detected);
console.log("bigger: " + detectedBigger);

// const URL =
//   "https://www.kontri.pl/pl/menu/biustonosze-100.html?filter_traits[12133]";

// const getOverallURL = (detected, URL, sizes) => {
//   let url = (URL += "&filter_sizes=");
//   if (detected.length === 0) {
//     return "Nie znaleziono adresu";
//   } else {
//     for (let size of detected) {
//       let found = sizes.find((item) => item.name === size);
//       url += `${found.number},`;
//     }
//     return url.slice(0, -1);
//   }
// };

// const getSingleURL = (size, URL, sizes) => {
//   let url = (URL += "&filter_sizes=");
//   const found = sizes.find((item) => item.name === size);
//   return (url += `${found.number}`);
// };

// const readSizes = getOverallURL(detected, URL, sizes);
// console.log(readSizes);
