const productController = require('../controllers/ProductController');
const {authenticateToken} = require('../auth/auth')

const router= require('express').Router();

router.route('/')
    .get(productController.getProducts)
    .post(productController.saveProduct)

router.route('/trending')
    .get(productController.getTrendingProducts)

router.route('/:id')
    .get(productController.getProductById)

module.exports = router;
