const ProductController = require('../controllers/productController');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product/all', ProductController.allProduct);
    app.get('/api/product/:_id', ProductController.productById);
    app.put('/api/product/update/:_id', ProductController.updateProduct);
    app.delete('/api/product/delete/:_id', ProductController.deleteProduct)
}