function palindrome(str) {
  // Turns string into lowercase and gets only letters and numbers
  let newStr = str.toLowerCase().match(/[a-z0-9]/g);
  // Returns true if there is no string
  if (!newStr) {
    return true;
  }
  // Checks first to last until reaches middle
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] != newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /- :) 0-0"));
