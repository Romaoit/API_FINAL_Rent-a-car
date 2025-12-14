const request = require("supertest");
const app = require("../src/app");

let token = "";
let carroId = "";
let clienteId = "";
let reservaId = "";

beforeAll(async () => {
  // Login e gerar token
  const login = await request(app).post("/api/auth/login").send({
    email: "admin@test.com",
    password: "123456"
  });
  token = login.body.token;

  // Criar carro
  const car = await request(app)
    .post("/api/carros")
    .set("Authorization", `Bearer ${token}`)
    .send({
      marca: "Honda",
      modelo: "Civic",
      precoPorDia: 120
    });
  carroId = car.body._id;

  // Criar cliente
  const client = await request(app)
    .post("/api/clientes")
    .set("Authorization", `Bearer ${token}`)
    .send({
      nome: "Carlos Mendes",
      email: "carlos@test.com"
    });
  clienteId = client.body._id;
});

describe("Gestão de Reservas", () => {
  it("Deve criar uma reserva", async () => {
    const res = await request(app)
      .post("/api/reservas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        cliente: clienteId,
        carro: carroId,
        dataInicio: "2025-01-10",
        dataFim: "2025-01-15",
        valorTotal: 600
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    reservaId = res.body._id;
  });

  it("Deve listar todas as reservas", async () => {
    const res = await request(app)
      .get("/api/reservas")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
