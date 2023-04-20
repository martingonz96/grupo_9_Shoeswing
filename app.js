const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware');

/////////
const app = express();
////////


//////// Middle wares
app.use(session({
    secret: 'esto es un secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
//////// Middle wares


const mainRouter = require("./routes/mainRouter");
const productsRouter = require('./routes/productRouter');
const usersRoutes = require ('./routes/userRoutes');
const indexRouter = require('./routes/indexRoutes');


const apiProductsRouter = require('./routes/api/products')
const apiUsersRouter = require('./routes/api/users')


//configuradion de template engine
app.set("view engine", "ejs");
app.set('views', './views');

//Rutas
app.use(mainRouter);
app.use('/products', productsRouter);
app.use(usersRoutes);
app.use(indexRouter)

//APIS
app.use('/api/products',apiProductsRouter);
app.use('/api/users', apiUsersRouter)

app.listen(3000, (console.log("listening on port 3000")));