import request from 'supertest';
import app from '../app';
import database from '../database/mongo';

describe("Contact", () => {
    beforeAll(async() => {
      const connection = await database.connect(); 
      return connection;
    })

    it("should be able to find a new user", async () => {
        const response = await request(app).get("/home").send({
            name: "User example"
        }) 
        expect(response.status).toBe(200);
    })

    it("should be able to create a new user", async () => {
        const response = await request(app).post("/home/users").send({
            name: "User example"
        }) 
        expect(response.status).toBe(201);
    })

    it("Delete email from user", async () => {
        const response = await request(app).delete("/home/users/:id").send({
            name: "User example"
        }) 
        expect(response.status).toBe(200);
    })
})