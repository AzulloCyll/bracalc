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

const sizes = [
  //65
  { name: "65B", number: 290 },
  { name: "65C", number: 213 },
  { name: "65D", number: 203 },
  { name: "65E", number: 203 },
  { name: "65F", number: 188 },
  { name: "65G", number: 186 },
  { name: "65H", number: 189 },
  { name: "65I", number: 190 },
  { name: "65J", number: 191 },
  //70
  { name: "70A", number: 224 },
  { name: "70B", number: 181 },
  { name: "70C", number: 182 },
  { name: "70D", number: 161 },
  { name: "70E", number: 162 },
  { name: "70F", number: 163 },
  { name: "70G", number: 192 },
  { name: "70H", number: 193 },
  { name: "70I", number: 194 },
  { name: "70J", number: 195 },
  { name: "70K", number: 278 },
  { name: "70L", number: 279 },
];

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

getSingleURL = (size, URL, sizes) => {
  let url = (URL += "&filter_sizes=");
  const found = sizes.find((item) => item.name === size);
  return (url += `${found.number}`);
};

console.log(getOverallURL(detected, URL, sizes));
