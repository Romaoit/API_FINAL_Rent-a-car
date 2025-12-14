require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");

connectDB();

app.listen(process.env.PORT || 3000, () =>
console.log("API final rodando" )
 );