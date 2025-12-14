module.exports = {
  async up(db) {
    await db.createCollection("usuarios");

    await db.collection("usuarios").createIndex(
      { email: 1 },
      { unique: true }
    );
  },

  async down(db) {
    await db.collection("usuarios").drop();
  }
};
