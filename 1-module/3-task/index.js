/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str !=0){
    let firstLetter = str[0].toUpperCase();
    let mass = [];
    mass.push(firstLetter);
    for(let i = 1; i < str.length; i++){
      mass.push(str[i]);
    }
    let result = mass.join('');
    return result;
  }
  else return str ="";
}