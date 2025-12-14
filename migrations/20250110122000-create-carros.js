module.exports = {
  async up(db) {
    await db.createCollection("carros");

    await db.collection("carros").createIndexes([
      { key: { marca: 1 } },
      { key: { modelo: 1 } }
    ]);
  },

  async down(db) {
    await db.collection("carros").drop();
  }
};
