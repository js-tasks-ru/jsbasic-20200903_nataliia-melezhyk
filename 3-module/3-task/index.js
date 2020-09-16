/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
  let newArr = [];
  arr.forEach((item, index, array) => {
    if(index > 0 && item.lenght != 0) {
      item = item[0].toUpperCase() + item.slice(1);; 
    }
    newArr.push(item);
    return item;
  });
  return newArr.join('');
}
