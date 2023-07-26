const numArr = [2, -5, 10, -3, 7, 18];

let total = 0;
for (num of numArr) {
  if (num > 0) {
    total += num;
  }
}

console.log(total);
