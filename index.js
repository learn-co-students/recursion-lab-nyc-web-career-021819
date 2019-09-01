// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(string) {
  if (string === "") {
    return ""
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}


function isPalindrome(string) {
  let l = string.length
  if (l < 2) {
    return true
  } else if (string[0] === string[l - 1]) {
    return isPalindrome(string.substring(1, l - 1))
  } else {
    return false
  }
}


function addUpTo(array, index) {
  if (index) {
    return array[index] + addUpTo(array, --index)
  } else {
    return array[index]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, num) {
  if (!array.length) {
    return false;
  } else if (array[0] === num) {
    return true;
  } else {
    return includesNumber(array.slice(1), num);
  }
}
