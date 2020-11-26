const express = require('express')
const routes = express.Router()
const ProductController = require('./app/controllers/ProductController')
//VIEWS

routes.get("/", function(req, res){
    return res.render("layout.njk")
});
routes.get("/views/about", function(req, res){
    return res.render("about.njk")
})

routes.get("/products/create", ProductController.create);

routes.get("/ads/create", function(req, res){
    return res.render("products/create")
});
module.exports = routes