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

module.exports = {
  get3,
  get5,
};
