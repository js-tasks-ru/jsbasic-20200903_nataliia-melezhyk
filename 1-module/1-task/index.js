/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let counter = n;
  let result = n;
  if( n === 1 || n === 0 ) result = 1;
  else{
    for(let i = 1; i <= counter; i++){
      result = result * (n-1);
      counter--;
      n--;
    }
  }
  return result;
}