// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @property {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

console.log(fetchUser());

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user[1].name;
      email.innerText = user[1].email;
      address.innerText = user[1].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
