const { get3, get5 } = require("./functions");

const underbust065 = get5(65);
const underbust070 = get5(70);
const underbust075 = get5(75);
const underbust080 = get5(80);
const underbust085 = get5(85);
const underbust090 = get5(90);
const underbust095 = get5(95);
const underbust100 = get5(100);

const underbustArr = [
  underbust065,
  underbust070,
  underbust075,
  underbust080,
  underbust085,
  underbust090,
  underbust095,
  underbust100,
];

const underbustSpanArr = [];
underbustSpanArr[0] = [
  0,
  get3(80),
  get3(82),
  get3(84),
  get3(86),
  get3(88),
  get3(90),
  get3(92),
  get3(94),
  get3(96),
  0,
  0,
];

underbustSpanArr[1] = [
  get3(83),
  get3(85),
  get3(87),
  get3(89),
  get3(91),
  get3(93),
  get3(95),
  get3(97),
  get3(99),
  get3(101),
  get3(103),
  get3(105),
];

underbustSpanArr[2] = [
  get3(88),
  get3(90),
  get3(92),
  get3(94),
  get3(96),
  get3(98),
  get3(100),
  get3(102),
  get3(104),
  get3(106),
  get3(108),
  get3(110),
];

underbustSpanArr[3] = [
  0,
  get3(95),
  get3(97),
  get3(99),
  get3(101),
  get3(103),
  get3(105),
  get3(107),
  get3(109),
  get3(111),
  get3(113),
  get3(115),
];

underbustSpanArr[4] = [
  0,
  get3(100),
  get3(102),
  get3(104),
  get3(106),
  get3(108),
  get3(110),
  get3(112),
  get3(114),
  get3(116),
  get3(118),
  get3(120),
];

underbustSpanArr[5] = [
  0,
  get3(105),
  get3(107),
  get3(109),
  get3(111),
  get3(113),
  get3(115),
  get3(117),
  get3(119),
  get3(121),
  get3(123),
  get3(125),
];

underbustSpanArr[6] = [
  0,
  get3(110),
  get3(112),
  get3(114),
  get3(116),
  get3(118),
  get3(120),
  get3(122),
  get3(124),
  get3(126),
  get3(128),
  0,
];

underbustSpanArr[7] = [
  0,
  0,
  0,
  get3(119),
  get3(121),
  get3(123),
  get3(125),
  get3(127),
  get3(129),
  get3(131),
  0,
  0,
];

const underbustNames = ["65", "70", "75", "80", "85", "90", "95", "100"];
const bustNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

module.exports = {
  underbustArr,
  underbustNames,
  underbustSpanArr,
  bustNames,
};
