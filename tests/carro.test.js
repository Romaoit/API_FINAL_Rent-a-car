const request = require("supertest");
const app = require("../src/app");

let token = "";
let carroId = "";

beforeAll(async () => {
  // Registrar e logar usuário
  await request(app).post("/api/auth/register").send({
    nome: "Admin",
    email: "admin@test.com",
    password: "123456"
  });

  const login = await request(app).post("/api/auth/login").send({
    email: "admin@test.com",
    password: "123456"
  });

  token = login.body.token;
});

describe("Gestão de Carros", () => {
  it("Deve criar um carro", async () => {
    const res = await request(app)
      .post("/api/carros")
      .set("Authorization", `Bearer ${token}`)
      .send({
        marca: "Toyota",
        modelo: "Corolla",
        precoPorDia: 150
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    carroId = res.body._id;
  });

  it("Deve listar todos os carros", async () => {
    const res = await request(app)
      .get("/api/carros")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
