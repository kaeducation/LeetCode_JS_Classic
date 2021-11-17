function isPalindrome(s) {
  /* Sanitize input string to only look
  for alphanumeric characters
  */
  s.toLowerCase().replace(/[\W_]/g, "");

  /*
  Create a left and right pointer
  */
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  console.log("true");
}

module.exports = isPalindrome;
