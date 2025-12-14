module.exports = {
  async up(db) {
    await db.createCollection("clientes");

    await db.collection("clientes").createIndex(
      { email: 1 },
      { unique: true }
    );
  },

  async down(db) {
    await db.collection("clientes").drop();
  }
};
