/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    console.log('1');
    const table = this.createTable();
    const body = this.createTableBody(rows);
    table.append(body);

    this.elem = table;
  }
  
  createTable(){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML= "<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>";
    table.append(thead);

    return table;
  }

  createTableBody(rows){
    const tbody = document.createElement('tbody');
    rows.forEach(element => {
      const tr = document.createElement('tr');
      for(let key in element){
        const td = document.createElement('td');
        td.innerHTML = element[key];
        tr.append(td);
      }
      const tdLast = document.createElement('td');
      const btnRemove = document.createElement('button');
      btnRemove.addEventListener('click', function(event){
        tr.remove();
      })
      btnRemove.className = 'btnRemove';
      btnRemove.innerHTML = 'X';
      tdLast.append(btnRemove);
      tr.append(tdLast);
      tbody.append(tr);
    });
    return tbody;
  }
}
