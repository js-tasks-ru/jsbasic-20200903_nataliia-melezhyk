/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = arr.filter(function(item){
    if (a <= item && item <= b) return item ;
  });
  return result;
}
