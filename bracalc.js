const {
  underbustArr,
  underbustNames,
  underbustSpanArr,
  bustNames,
} = require("./data");

const gorteks =
  "https://www.gorteks.com.pl/Kalkulator-rozmiaru-cabout-pol-138.html";

// console.table(underbustArr);

const getUnderbustIndex = (underbust) => {
  let index;
  for (let item of underbustArr) {
    if (item.includes(underbust) === true) {
      index = underbustArr.indexOf(item);
    }
  }
  return index;
};

const getUnderbustaArrayToSearch = (index) => {
  return underbustSpanArr[index];
};

const getBustIndex = (bust, underbustaArrayToSearch) => {
  let index = [];
  for (let item of underbustaArrayToSearch) {
    if (item != 0) {
      if (item.includes(bust) === true) {
        index.push(underbustaArrayToSearch.indexOf(item));
      }
    }
  }
  return index;
};

const getUnderBustName = (index) => {
  return underbustNames[index];
};

const getBustNames = (index) => {
  const result = [];
  index.forEach((item) => {
    result.push(bustNames[item]);
  });
  return result;
};

const combineSizeName = (underbustSize, bustSize) => {
  let result = [];
  for (let size of bustSize) {
    result.push(underbustSize + size);
  }
  return result;
};

const detectBraSizeName = (underbust, bust) => {
  const underbustIndex = getUnderbustIndex(underbust);

  const underbustaArrayToSearch = getUnderbustaArrayToSearch(underbustIndex);
  const bustIndex = getBustIndex(bust, underbustaArrayToSearch);

  const underbustSize = getUnderBustName(underbustIndex);
  const bustSize = getBustNames(bustIndex, underbustaArrayToSearch);

  const detectedNames = combineSizeName(underbustSize, bustSize);
  return detectedNames;
};

console.log(detectBraSizeName(70, 90));
