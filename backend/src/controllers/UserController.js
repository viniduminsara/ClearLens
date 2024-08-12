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
    const user = await UserModel.findOne({email: req.user.email})
        .select('-password')
        .populate({
            path: 'cart'
        });

    if (user) {
        return res.status(200).json({user: user});
    } else {
        return res.status(404).json({message: 'User not found'});
    }
}

module.exports.addCartItem = async (req, res, next) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: 'Invalid product ID'});
    }

    const user = await UserModel.findOne({email: req.user.email}).select('-password');
    const product = await ProductModel.findById(id);
    if (product) {
        user.cart.push(product);
        await user.save();
        return res.status(200).json({message: 'Cart item added'});
    }
    return res.status(404).json({message: 'Product not found'});
}

module.exports.addWishlistItem = async (req, res, next) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: 'Invalid product ID'});
    }

    const user = await UserModel.findOne({email: req.user.email}).select('-password');
    const product = await ProductModel.findById(id);
    if (product) {
        user.wishlist.push(product);
        await user.save();
        return res.status(200).json({message: 'Wishlist item added'});
    }
    return res.status(404).json({message: 'Product not found'});
}
