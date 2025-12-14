const request = require("supertest");
const app = require("../src/app");

let token = "";
let clienteId = "";

beforeAll(async () => {
  const login = await request(app).post("/api/auth/login").send({
    email: "admin@test.com",
    password: "123456"
  });
  token = login.body.token;
});

describe("Gestão de Clientes", () => {
  it("Deve criar um cliente", async () => {
    const res = await request(app)
      .post("/api/clientes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "João Silva",
        email: "joao@test.com",
        telefone: "999999999"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    clienteId = res.body._id;
  });

  it("Deve listar todos os clientes", async () => {
    const res = await request(app)
      .get("/api/clientes")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
