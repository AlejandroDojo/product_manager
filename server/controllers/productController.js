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

module.exports.allProduct = (req,res) => {
    return Product.find()
        .then((allproducts) => {
            return res.status(200).json(allproducts)
        })
        .catch((err) => {
            return res.status(406).json({message: "Is there a big error"}, err)
        })
}

module.exports.productById = (req,res) => {
    const {_id} = req.params;

    return Product.find({_id: _id})
        .then((foundProduct) => {
            return res.status(200).json(foundProduct)
        })
        .catch((err) => {
            return res.status(406).json({message: "Is there a big error"}, err)
        })
}

module.exports.updateProduct = (req,res) => {
    const {_id} = req.params;
    const {title, description, price} = req.body;

    return Product.findOneAndUpdate({_id: _id}, {title: title, description: description, price: price})
        .then((foundProduct) => {
            return res.status(200).json(foundProduct)
        })
        .catch((err) => {
            return res.status(406).json({message: "Is there a big error"}, err)
        })
};

module.exports.deleteProduct = (req,res) => {
    const {_id} = req.params;

    return Product.deleteOne({_id: _id})
        .then((foundProduct) => {
            return res.status(200).json(foundProduct);
        })
        .catch((err) => {
            return res.status(406).json({message: "Is there a big error"}, err);
        })
};