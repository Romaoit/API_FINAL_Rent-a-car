module.exports = {
  async up(db) {
    await db.createCollection("reservas");

    await db.collection("reservas").createIndexes([
      { key: { carro: 1 } },
      { key: { cliente: 1 } },
      { key: { dataInicio: 1 } },
      { key: { dataFim: 1 } }
    ]);
  },

  async down(db) {
    await db.collection("reservas").drop();
  }
};
