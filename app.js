const express = require("express");
const methodOverride = require('method-override');
const app = express();
const mainRouter = require("./routes/mainRouter");
const productsRouter = require('./routes/productRouter');


//Middelware
app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride('_method'));

//configuradion de template engine
app.set("view engine", "ejs");
app.set('views', './views');

//Rutas
app.use(mainRouter);
app.use('/products', productsRouter);

app.listen(3000, (console.log("listening on port 3000")));