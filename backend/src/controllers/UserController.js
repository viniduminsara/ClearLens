const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel')
const ProductModel = require('../models/ProductModel')
const {generateToken} = require("../auth/auth");

module.exports.signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    const isUsernameExists = await UserModel.findOne({username: username});
    if (isUsernameExists) {
        return res.status(409).json({message: 'Username already exists'});
    }

    const isEmailExists = await UserModel.findOne({email: email});
    if (isEmailExists) {
        return res.status(409).json({message: 'Email already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
        username: username,
        email: email,
        password: hashedPassword
    });

    await user.save();
    const token = generateToken(user);
    return res.status(201).json({token: token, message: 'User saved successfully'});
}

module.exports.signIn = async (req, res, next) => {
    const {username, password} = req.body;

    const existingUser = await UserModel.findOne({username: username});
    if (!existingUser) {
        return res.status(404).json({message: 'User not found'});
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        return res.status(401).json({message: 'Password incorrect'});
    }
    const token = generateToken(existingUser);
    return res.status(200).json({token: token, message: 'Sign in successful'});
}

module.exports.getById = async (req, res, next) => {
    const user = await UserModel.findOne({ email: req.user.email })
        .select('-password')
        .populate([
            { path: 'cart' },
            { path: 'wishlist' }
        ]);

    if (user) {
        return res.status(200).json({user: user});
    } else {
        return res.status(404).json({message: 'User not found'});
    }
}

module.exports.addCartItem = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    const user = await UserModel.findOne({ email: req.user.email }).select('-password');
    const product = await ProductModel.findById(id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const isProductInCart = user.cart.some((cartItem) => cartItem.toString() === product._id.toString());

    if (isProductInCart) {
        return res.status(409).json({ message: 'Product is already in cart' });
    }

    user.cart.push(product);
    await user.save();
    return res.status(200).json({ message: 'Cart item added' });
}

module.exports.deleteCartItem = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    const user = await UserModel.findOne({ email: req.user.email }).select('-password');
    const product = await ProductModel.findById(id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the product is in the user's cart
    const isProductInCart = user.cart.some((cartItem) => cartItem.toString() === product._id.toString());

    if (!isProductInCart) {
        return res.status(404).json({ message: 'Product is not in cart' });
    }

    // Remove the product from the cart
    user.cart = user.cart.filter((cartItem) => cartItem.toString() !== product._id.toString());
    await user.save();
    return res.status(200).json({ message: 'Cart item deleted' });
}

module.exports.addWishlistItem = async (req, res, next) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: 'Invalid product ID'});
    }

    const user = await UserModel.findOne({email: req.user.email}).select('-password');
    const product = await ProductModel.findById(id);

    if (!product) {
        return res.status(404).json({message: 'Product not found'});
    }

    const isProductInWishlist = user.wishlist.some((wishlistItem) => wishlistItem.toString() === product._id.toString());

    if (isProductInWishlist) {
        return res.status(409).json({ message: 'Product is already in wishlist' });
    }

    user.wishlist.push(product);
    await user.save();
    return res.status(200).json({message: 'Wishlist item added'});
}

module.exports.deleteWishItem = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    const user = await UserModel.findOne({ email: req.user.email }).select('-password');
    const product = await ProductModel.findById(id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the product is in the user's cart
    const isProductInWishlist= user.wishlist.some((cartItem) => cartItem.toString() === product._id.toString());

    if (!isProductInWishlist) {
        return res.status(404).json({ message: 'Product is not in cart' });
    }

    // Remove the product from the cart
    user.wishlist = user.wishlist.filter((cartItem) => cartItem.toString() !== product._id.toString());
    await user.save();
    return res.status(200).json({ message: 'Wishlist item deleted' });
}
