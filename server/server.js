const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./database/db.js");

//config
dotenv.config({ path: "./config.env" });

console.log(process.env.PORT);

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on htpps://localhost:${process.env.PORT}`);
});
