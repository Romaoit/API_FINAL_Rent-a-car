const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email:{ type: String, required: true },
    telefone: String

});

module.exports = mongoose.model("Cliente", ClienteSchema);