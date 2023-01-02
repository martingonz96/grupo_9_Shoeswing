const express = require("express");
const app = express();
const main = require("./routes/main");

//Middelware
app.use(express.static("public"));

//Rutas
app.use(main);

app.listen(3000, (console.log("listening on port 3000")));