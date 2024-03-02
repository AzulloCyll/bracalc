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

const detected = detectBraSizeName(70, 90);

const URL =
  "https://www.kontri.pl/pl/menu/biustonosze-100.html?filter_traits[12133]";

const getOverallURL = (detected, URL, sizes) => {
  let url = (URL += "&filter_sizes=");
  if (detected.length === 0) {
    return "Nie znaleziono adresu";
  } else {
    for (let size of detected) {
      let found = sizes.find((item) => item.name === size);
      url += `${found.number},`;
    }
    return url.slice(0, -1);
  }
};

const getSingleURL = (size, URL, sizes) => {
  let url = (URL += "&filter_sizes=");
  const found = sizes.find((item) => item.name === size);
  return (url += `${found.number}`);
};

const readSizes = getOverallURL(detected, URL, sizes);
console.log(readSizes);
