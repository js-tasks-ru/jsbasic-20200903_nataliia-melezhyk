/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let maxAge = age;
  let data = '';
  users.forEach((item) => {
    if(item.age <= maxAge){
      data += item.name + ", " + item.balance + "\n";
    }
  });
  data = data.trim();
  return data;
}
