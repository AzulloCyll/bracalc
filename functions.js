const get5 = (num) => {
  const result = [];
  for (let i = -2; i <= 2; i++) {
    result.push(num + i);
  }
  return result;
};

const get3 = (num) => {
  const result = [];
  for (let i = -1; i <= 1; i++) {
    result.push(num + i);
  }
  return result;
};

const getUnderbustIndex = (underbust, underbustArr) => {
  let index;
  for (let item of underbustArr) {
    if (item.includes(underbust) === true) {
      index = underbustArr.indexOf(item);
    }
  }
  return index;
};

const getUnderbustaArrayToSearch = (index, underbustSpanArr) => {
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

const getUnderBustName = (index, underbustNames) => {
  return underbustNames[index];
};
const getBustNames = (index, bustNames) => {
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

module.exports = {
  get3,
  get5,
  getUnderbustIndex,
  getUnderbustaArrayToSearch,
  getBustIndex,
  getUnderBustName,
  getBustNames,
  combineSizeName,
};
