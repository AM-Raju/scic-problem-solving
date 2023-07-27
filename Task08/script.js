const fnSecLowestNum = (numArr) => {
  const sortedArr = numArr.sort((a, b) => a - b);

  let firstLowestNumIndex = 0;
  let secondLowestNumIndex = 1;

  while (sortedArr[secondLowestNumIndex] === sortedArr[firstLowestNumIndex]) {
    if (sortedArr[secondLowestNumIndex] === sortedArr[firstLowestNumIndex]) {
      firstLowestNumIndex += 1;
      secondLowestNumIndex += 1;
    }
  }
  const secLowestNum = sortedArr[secondLowestNumIndex];
  return secLowestNum;
};

const numArr = [5, 8, 3, 3, 3, 3, 4, 7, 12, 75, 64, 23];
const result = fnSecLowestNum(numArr);
console.log(result);
