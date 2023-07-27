const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");


//config App
const app = express();
require("dotenv").config();

//Import Routes
const itemsRoutes = require("./routes/itemsRoute");

// Set the 'views' directory for EJS files
app.set('/views/index.ejs', '/views');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the EJS file
app.get('/', (req, res) => {
  const pageTitle = 'My Website';
  const username = ' test';
  res.render('index', { pageTitle, username });
});


const PORT = process.env.PORT || 5013;
//mongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`db connected: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} not connect to the database !`));

//Middlewares
// app.use(express.json)
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

//Routes Middleware
app.use("/api/items", itemsRoutes);


