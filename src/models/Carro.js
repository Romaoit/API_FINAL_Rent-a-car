const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    ano: Number,
    matricula: { type: String, required: true },
    precoPorDia: { type: Number, required: true },
    disponivel: { type: Boolean, default: true }
});

module.exports = mongoose.model("Carro", CarroSchema);