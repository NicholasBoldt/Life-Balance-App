import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({ token }) => {
    console.log(token);
    tokenService.setToken(token);
  });
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}


function getUser() {
  return fetch(BASE_URL + "get", {
    headers: new Headers({'Content-Type': 'application/json'}),
  }).then((res) => res.json());
}


function logout() {
  tokenService.removeToken();
}

export default {
  signup,
  login,
  getUser,
  logout,

}


