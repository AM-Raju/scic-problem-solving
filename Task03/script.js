const maxOccurrence = () => {
  // Getting occurrence of number as object
  const occurrence = {};

  for (let num of numArr) {
    if (occurrence[num]) {
      occurrence[num] += 1;
    } else {
      occurrence[num] = 1;
    }
  }

  console.log(occurrence);

  let values = Object.values(occurrence);
  console.log(values);
  let keys = Object.keys(occurrence);
  console.log(keys);

  // Find out the maximum occurrence value
  const maxValue = Math.max.apply(null, values);
  console.log(maxValue);

  const mostFreqNumResult = mostFreqNum(occurrence, maxValue);
  return mostFreqNumResult;
};

const mostFreqNum = (occurrence, maxValue) => {
  return Object.keys(occurrence).find((key) => occurrence[key] === maxValue);
};

const numArr = [5, 2, 5, 5, 3, 3, 1, 4, 9];

const result = maxOccurrence(numArr);

console.log(result);
