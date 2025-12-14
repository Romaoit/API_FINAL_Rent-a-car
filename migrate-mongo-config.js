require("dotenv").config();

module.exports = {
  mongodb: {
    url: process.env.MONGO_URI,
    databaseName: "rentacar"
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog"
};
