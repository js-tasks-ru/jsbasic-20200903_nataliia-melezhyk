/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const listFiends = document.createElement('ul');
  friends.forEach((item) => {
    const itemFriends = document.createElement('li');
    itemFriends.innerHTML =  item.firstName + item.lastName ;
    listFiends.append(itemFriends); 
  })
  return listFiends;
}