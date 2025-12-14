const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema ({ 
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true},
    carro: { type: mongoose.Schema.Types.ObjectId, ref: "Carro", required: true },
    dataInicio: Date,
    dataFim: Date,
    valorTotal: Number
});

module.exports = mongoose.model("Reserva", ReservaSchema);