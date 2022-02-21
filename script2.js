const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.length,
        users: data.map((user) => user.name),
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await getRequest.json();
  return {
    count: data.length,
    users: data.map((user) => user.name),
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
