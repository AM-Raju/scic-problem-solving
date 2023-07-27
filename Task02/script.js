const sumOfPositiveNum = (numArr) => {
  let total = 0;
  for (let num of numArr) {
    if (num > 0) {
      total += num;
    }
  }
  return total;
};

const numArr = [2, -5, 10, -3, 7, -8, 18];

const result = sumOfPositiveNum(numArr);

console.log(result);
