import tokenService from './tokenService';
const BASE_URL = '/api/roles/';

function addRole(role) {
  const token = localStorage.token;
  console.log(JSON.stringify(role))
  return fetch(BASE_URL + 'addRole', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + token},
    body: JSON.stringify(role),
  })
}

function getAll() {
  const token = localStorage.token;
  return fetch(BASE_URL, {
    headers: {
      'Authorization': "Bearer " + token,
    }
  }).then((res) => res.json());
}

function deleteRole(id) {
  const token = localStorage.token;
  return fetch(BASE_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
      'Authorization': "Bearer " + token,
    },
  }).then((res) => res.json());
}

function addHabit(habit, id) {
  console.log(habit);
  const token = localStorage.token;
  return fetch(BASE_URL + id + "/addHabit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': "Bearer " + token,
    },
    body: JSON.stringify(habit),
  });
}

export function updateHabit(habit, id) {
  const token = localStorage.token;
    return fetch(BASE_URL + id + "/updateHabit", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
      body: JSON.stringify(habit)
    }).then(res => res.json());
  }

  function deleteHabit(id) {
    const token = localStorage.token;
    return fetch(BASE_URL + id + "/deleteHabit", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        'Authorization': "Bearer " + token,
      },
    }).then((res) => res.json());
  }

function addTask(task, id) {
  console.log(task);
  const token = localStorage.token;
  return fetch(BASE_URL + id + "/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': "Bearer " + token,
    },
    body: JSON.stringify(task),
  });
}

function deleteTask(id) {
  const token = localStorage.token;
    return fetch(BASE_URL + "deleteTask/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        'Authorization': "Bearer " + token,
      },
    }).then((res) => res.json());
  }

  function completeHabit(id) {
    console.log(id);
    const token = localStorage.token;
    return fetch(BASE_URL + "completeHabit/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
     }).then((res) => res.json());
  }

  function calculateStreak(id) {
    console.log(id)
    const token = localStorage.token;
    return fetch(BASE_URL + "getStreak/" + id, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
    }).then((res) => res.json());
  }

  function resetHabits() {
    const token = localStorage.token;
    return fetch(BASE_URL + "resetHabits/", {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
    }).then((res) => res.json());
  }

  function moveUpHabit(id) {
    const token = localStorage.token;
    return fetch(BASE_URL + "moveUpHabit/" + id, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
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