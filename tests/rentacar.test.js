const request = require("supertest");
const app = require("../src/app");

describe("API Rent-a-Car", () => {
  it("Deve estar online", async () => {
    const res = await request(app).get("/"); // ou rota qualquer válida
    expect([200, 404]).toContain(res.statusCode); // aceita 200 ou 404 dependendo da sua rota root
  });
});
