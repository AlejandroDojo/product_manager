const Product = require('../models/productModel');


module.exports.index = (req, res) => {
    return res.status(200).json({message: "Welcome to new World"});
}

module.exports.createProduct = (req, res) => {
    const {title, description, price} = req.body;

    if (!title || !description || !price) {
        return res.status(406).json({message: "You need to put all required fields"});
    }

    let newProduct = {
        title: title,
        price: price,
        description: description
    }

    return Product.create(newProduct)
        .then((createdProduct) => res.status(201).json(createdProduct))
        .catch((err) => res.status(206).json({message: "There is a error "}, err));
}