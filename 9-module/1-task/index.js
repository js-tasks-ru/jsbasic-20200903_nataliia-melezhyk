/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

export default function promiseClick(button) {
  button.addEventListener('click', (event) => { 
    resolve(event);
   }, { once: true });
}

promiseClick(button)
  .then((event) => console.log(event)); 
