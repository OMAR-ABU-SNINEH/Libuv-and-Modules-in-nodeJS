// const sum = () => 6 + 6;
// const mul = () => 5 * 2;

// module.exports = {
//   sum: sum,
//   mul: mul,
// };

const localModule = {
  sum: () => 6 + 6,
  mul: () => 5 * 2,
};
module.exports = localModule;
