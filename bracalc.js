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
  for (item of underbustArr) {
    if (item.includes(underbust) === true) {
      return underbustArr.indexOf(item);
    }
  }
};

const getUnderBustName = (index) => {
  return underbustNames[index];
};

const getUnderbustaArrayToSearch = (index) => {
  return underbustSpanArr[index];
};

// ----- test ------

const underbust = 84;

let index = getUnderbustIndex(underbust);
let tableToSearch = getUnderbustaArrayToSearch(index);

console.table(tableToSearch);

// console.table(underbustSpanArr);