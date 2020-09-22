/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table){
    let elements = table.querySelectorAll('td');

    for(let i = 3; i < elements.length; i += 4){
        let elem = elements[i];
        if(elem.dataset.available === "true"){
            elem.parentElement.classList.add('available')
        }
        else if(elem.dataset.available === "false"){
            elem.parentElement.classList.add('unavailable')
        }
        else elem.parentElement.setAttribute('hidden', 'true');
    }
    for(let i = 6; i < elements.length; i += 4){
        let elem = elements[i];
        if(elements[i].innerHTML === "m"){
            elem.parentElement.classList.add('male');
        }
        else {
            elem.parentElement.classList.add('female'); 
        }
    }
    for(let i = 5; i < elements.length; i += 4){
        let elem = elements[i];
        if(elements[i].innerHTML < 18){
            elem.parentElement.style.textDecoration = "line-through";
        }
    }
    return elements;
    
}
