const reverseString = (string) => {
  // Converting string to an array
  const stringArray = string.split("");
  let revStringArray = [];

  // Loop to reverse the array
  for (let letter of stringArray) {
    revStringArray.unshift(letter);
  }

  // Join the reverse array to get reverse string
  return revStringArray.join("");
};

// given string
const string = "Programming Hero";
const output = reverseString(string);
console.log(output);
