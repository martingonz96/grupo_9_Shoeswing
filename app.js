const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

//Middelware
app.use(express.static("public"));

//configuradion de template engine
app.set("view engine", "ejs");

//Rutas
app.use(mainRouter);

app.listen(3000, (console.log("listening on port 3000")));