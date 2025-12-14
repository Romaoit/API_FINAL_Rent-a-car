const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
        console.error("Não consigo me conectar ao banco de dados, verifica", error);
        process.exit(1);
    }
};

module.exports = connectDB;