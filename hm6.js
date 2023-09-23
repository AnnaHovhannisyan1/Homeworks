//1. Given an array. Write a recursive function that returns the sum of it. (Hint: arr.pop())
function sumArray(arr) {
    if (arr.length == 1) return arr[0] // base case
    return arr.pop()+sumArray(arr)  // recurse
}
//2.Given a number. Write a recursive function that reverse the number. Return the new
number.
  function reverseFunction(num, reversed = 0) {
    debugger
    if (num === 0) {
        return reversed;
    }
    return reverseFunction(Math.floor(num / 10),
        reversed * 10 + num % 10);
}
//3.Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;
have been replaced by &quot;3.14&quot;.
function replacePi(str) {
        
        if (str.length <= 1) {
          return str;
        }
        if (str[0] === "p"  && str[1] === "i") {
          return "3.14" + replacePi(str.substring(2, str.length));
        }
 
        return str[0] + replacePi(str.substring(1, str.length));
      }
//4.Given a string. Return true, if it is mirror symmetric to its middle symbol.
function isSymetric(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True';
}
