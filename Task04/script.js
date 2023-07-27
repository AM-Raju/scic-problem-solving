const numArr = [1, 3, 6, 8, 11, 15, 22];

const targetNum = 37;

const findIndices = (numArr, targetNum) => {
  let output = [];
  numArr.map((num, index) => {
    if (numArr[index] + numArr[index + 1] === targetNum) {
      output = [index, index + 1];
    }
  });
  return output;
};

const result = findIndices(numArr, targetNum);
console.log(result);
