/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let data = str.toLowerCase();
  let a = '1xBet';
  let b = 'XXX';
  let c = a.toLowerCase();
  let d = b.toLowerCase();
    
  if(data.indexOf(c) == -1 && data.indexOf(d) == -1){
    return false;
  }
  else return true;
}

