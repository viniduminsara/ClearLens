const userController = require('../controllers/UserController')
const {authenticateToken} = require("../auth/auth");

const router= require('express').Router();

router.route('/')
    .get(authenticateToken, userController.getById)

router.route('/signup')
    .post(userController.signup)

router.route('/signIn')
    .post(userController.signIn)

router.route('/cart/:id')
    .post(authenticateToken, userController.addCartItem)
    .delete(authenticateToken, userController.deleteCartItem)

router.route('/wishlist/:id')
    .post(authenticateToken, userController.addWishlistItem)
    .delete(authenticateToken, userController.deleteWishItem)

module.exports = router;
