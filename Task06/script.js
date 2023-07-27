let password = "";
const passwordLength = 8;
const passCondition = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

const generateRandomPassword = (length) => {
  password = "";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  const allChars = uppercaseLetters + lowercaseLetters + numbers + specialChars;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }
  return password;
};

let randomPassword = "";
while (passCondition.test(password) !== true) {
  randomPassword = generateRandomPassword(passwordLength);
}
// randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
