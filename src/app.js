const express = require("express");

const carroRoutes = require("./routes/carro.routes");
const clienteRoutes = require("./routes/cliente.routes");
const reservaRoutes = require("./routes/reserva.routes");
const authRoutes = require("./routes/auth.routes");


const app = express();
app.use(express.json());

app.use("/api", carroRoutes);
app.use("/api", clienteRoutes);
app.use("/api", reservaRoutes);
app.use("/api", authRoutes);

module.exports = app;
