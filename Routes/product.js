module.exports = (app) => {
    const product = require('../controllers/productController')

    app.post('/product/create', product.create)
    app.get('/product/findAll', product.findAll)
}