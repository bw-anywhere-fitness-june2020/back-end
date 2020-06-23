const request = require("supertest");
const server = require("./server");
const db = require("./db-Config");

describe("test class ", () => {
  user = { username: "username", password: "password" };

  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("login status", () => {
    it("works when signed in", async () => {
      let token;
      await request(server)
        .post("/api/auth/register")
        .send(user)
        .then((res) => {
          token = res.body.token;
        });
      return await request(server)
        .get("/api/class")
        .set({ authorization: token })
        .then((res) => expect(res.status).toBe(200));
    });

    it("works when signed out", async () => {
      let token = 12;
      return await request(server)
        .get("/api/class")
        .set({ authorization: token })
        .then((res) => expect(res.status).toBe(401));
    });
  });
});
describe("api/ class", () => {

  const makeclass1 = {       
    id: 1,
    classname: "jnkbkl",
    type: "streching",
    start_time: "2:00pm",
    duration: "1 hours",
    intensity_level: "easy",
    class_location: "mall",
    current_number_of_registered_attendees: 1,
    max_class_size: 20
};
  beforeEach(async () => {
    await db("api/class").truncate();
  });

  describe("api post class", () => {
    it("sends class", async () => {
      return await request(server)
        .post("/api/class")
        .send(makeclass1)
        .then((res) => {
          test = expect(res.body.classes.classname).toBe(
            makeclass1.classname
          );
        });
    });

    it("sends post", async () => {
      return await request(server)
        .post("/api/class")
        .send(makeclass1)
        .then((res) => expect(res.status).toBe(201));
    });
  });

})