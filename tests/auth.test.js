const request = require("supertest");
const app = require("../src/app");

describe("Autenticação", () => {
  it("Deve registrar um usuário", async () => {
    const res = await request(app).post("/api/auth/register").send({
      nome: "Admin",
      email: "admin@test.com",
      password: "123456"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("Deve fazer login e receber token JWT", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "admin@test.com",
      password: "123456"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
