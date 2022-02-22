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
    expect(data.users).toContain("Leanne Graham");
  });
});

it("getPeople returns cound and users", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 10,
          users: [
            "Leanne Graham",
            "Ervin Howell",
            "Clementine Bauch",
            "Patricia Lebsack",
            "Chelsey Dietrich",
            "Mrs. Dennis Schulist",
            "Kurtis Weissnat",
            "Nicholas Runolfsdottir V",
            "Glenna Reichert",
            "Clementina DuBuque",
          ],
        }),
    })
  );
  expect.assertions(4);
  return api.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(
      mockFetch.toBeCalledWith("https://jsonplaceholder.typicode.com/users")
    );
    expect(data.count).toEqual(10);
    expect(data.users).toContain("Leanne Graham");
  });
});
