const fetch = require("node-fetch");
const api = require("./script2");

it("calls api to get people", () => {
  expect.assertions(1);
  return api.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(10);
  });
});

it("calls api to get people with a promise", () => {
  expect.assertions(2);
  return api.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(10);
    expect(data.users.length).toBeGreaterThan(5);
  });
});
