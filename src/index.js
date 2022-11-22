// importing express
const express = require("express");

// importing cookie parser
const cookieParser = require("cookie-parser");

// importing cors
const cors = require("cors");

// importing routes
const routes = require("./routes/index");

// initialing express
const app = express();

require("./database");

// creating the conection com the port 3000
app.listen("3000", () => console.log("server initialized"));

// middleware
app.use(express.json());

// initaling dependecies and routes

// cors and cookie-parser
app.use(cookieParser());

app.use(cors());

// routes
app.use(routes);
