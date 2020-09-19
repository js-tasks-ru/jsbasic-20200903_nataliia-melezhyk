/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let length = table.rows.length;
    for(let i = 0; i < length; i++){
        table.rows[i].cells[i].style.background = "red";
    }
}
