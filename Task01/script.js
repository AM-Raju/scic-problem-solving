// given string
const string = "Programming Hero";

// Converting string to an array
const stringArray = string.split("");
let revStringArray = [];

// Loop to reverse the array
for (letter of stringArray) {
  revStringArray.unshift(letter);
}

// Join the reverse array to get reverse string
revString = revStringArray.join("");
console.log(revString);
