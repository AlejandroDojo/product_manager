const ProductController = require('../controllers/productController');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product/new', ProductController.createProduct);
}