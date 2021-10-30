export const rowalizer = (array, item_per_row = 3) => {
  const rowsNumber = Math.ceil(array.length / item_per_row);
  return Array.from({ length: rowsNumber }, (_, num) => {
    let start = num * item_per_row;
    let end = start + item_per_row;
    return array.slice(start, end);
  });
};

export const generateUID = function () {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};
