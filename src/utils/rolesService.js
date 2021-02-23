import tokenService from './tokenService';
const BASE_URL = '/api/roles/';

function addRole(role) {
  console.log(role)
  return fetch(BASE_URL + 'addRole', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + tokenService.getToken()}),
    body: JSON.stringify(role),
  })
}

export default {
  addRole
}