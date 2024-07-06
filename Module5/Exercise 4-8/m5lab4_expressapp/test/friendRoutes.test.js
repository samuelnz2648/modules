// test/friendRoutes.test.js

const request = require("supertest");
const express = require("express");
const friendRoutes = require("../routes/friendRoutes");

const app = express();
app.use(express.json());
app.use("/friends", friendRoutes);

describe("Friend Routes", () => {
  it("should get all friends", async () => {
    const response = await request(app).get("/friends");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(6);
  });

  it("should filter friends by gender", async () => {
    const response = await request(app).get("/friends/filter?gender=male");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });

  it("should filter friends by starting letter", async () => {
    const response = await request(app).get("/friends/filter?letter=P");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("Phoebe");
  });

  it("should get friend info headers", async () => {
    const response = await request(app).get("/friends/info");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user-agent");
    expect(response.body).toHaveProperty("content-type");
    expect(response.body).toHaveProperty("accept");
  });

  it("should get a friend by id", async () => {
    const response = await request(app).get("/friends/1");
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Phoebe");
  });

  it("should return 404 for a non-existent friend id", async () => {
    const response = await request(app).get("/friends/10");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Friend not found");
  });

  it("should add a new friend", async () => {
    const newFriend = { name: "Rachel", gender: "female" };
    const response = await request(app).post("/friends").send(newFriend);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Rachel");
    expect(response.body.gender).toBe("female");
    expect(response.body.id).toBe(7); // assuming previous ids are 1-6
  });

  it("should update an existing friend", async () => {
    const updatedFriend = { name: "Phoebe Buffay", gender: "female" };
    const response = await request(app).put("/friends/1").send(updatedFriend);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Phoebe Buffay");
  });

  it("should return 404 when updating a non-existent friend", async () => {
    const updatedFriend = { name: "John Doe", gender: "male" };
    const response = await request(app).put("/friends/10").send(updatedFriend);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Friend not found");
  });

  it("should perform calculations", async () => {
    const response = await request(app).get(
      "/friends/calculate?operation=add&num1=1&num2=2"
    );
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(3);
  });
});
