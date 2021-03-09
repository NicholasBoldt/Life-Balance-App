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

function getAll() {
  return fetch(BASE_URL, {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => res.json());
}

function deleteRole(id) {
  return fetch(BASE_URL + id, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => res.json());
}

function addHabit(habit, id) {
  console.log(habit);
  return fetch(BASE_URL + id + "/addHabit", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
    body: JSON.stringify(habit),
  });
}

export function updateHabit(habit, id) {
    return fetch(BASE_URL + id + "/updateHabit", {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
      body: JSON.stringify(habit)
    }).then(res => res.json());
  }

  function deleteHabit(id) {
    return fetch(BASE_URL + id + "/deleteHabit", {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
    }).then((res) => res.json());
  }

function addTask(task, id) {
  console.log(task);
  return fetch(BASE_URL + id + "/addTask", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
    body: JSON.stringify(task),
  });
}

function deleteTask(id) {
    return fetch(BASE_URL + "deleteTask/" + id, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
    }).then((res) => res.json());
  }

  function completeHabit(id) {
    console.log(id);
    return fetch(BASE_URL + "completeHabit/" + id, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
     }).then((res) => res.json());
  }

  function calculateStreak(id) {
    console.log(id)
    return fetch(BASE_URL + "getStreak/" + id, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
    }).then((res) => res.json());
  }

  function resetHabits() {
    return fetch(BASE_URL + "resetHabits/", {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
    }).then((res) => res.json());
  }

  function moveUpHabit(id) {
    return fetch(BASE_URL + "moveUpHabit/" + id, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      }),
    }).then((res) => res.json());
  }

export default {
  addRole,
  getAll,
  deleteRole,
  addHabit,
  updateHabit,
  deleteHabit,
  moveUpHabit,
  resetHabits,
  addTask,
  deleteTask,
  completeHabit,
  calculateStreak
}