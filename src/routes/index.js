const express = require("express");

// importing routes dependencies
const routes = express.Router();

// importing controller
const ProductsController = require("../controller/ProductsController");

routes.get("/", (req, res) => res.send(`<h1>Hello World</h1>`));

// listing all products
routes.get("/listingProducts", ProductsController.listingProducts);

// listing only the choose products
routes.get("/listingProducts/:id", ProductsController.listingChooseProduct);

// deletig products
routes.delete("/deleteProducts/:id", ProductsController.deleteProducts);

// posting products
routes.post("/postingProducts", ProductsController.postingProducts);

// updating products
routes.put("/updatingProducts", ProductsController.updatingProducts);

module.exports = routes;
