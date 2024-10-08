const mongoose = require('mongoose');
const ProductModel = require('../models/ProductModel');

module.exports.saveProduct = async (req, res, next) => {
    try {
        const {qty, name, description, brand, category, gender, weight, quantity, image, rating, price, newPrice, trending} = req.body;

        const product = new ProductModel({
            qty: qty,
            name: name,
            description: description,
            brand: brand,
            category: category,
            gender: gender,
            weight: weight,
            quantity: quantity,
            image: image,
            rating: rating,
            price: price,
            newPrice: newPrice,
            trending: trending,
        });

        await product.save();
        return res.status(201).json({ message: 'Product saved' });
    } catch (error) {
        next(error);
    }
}

module.exports.getProducts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 9;
        const skip = (page - 1) * limit;

        const products = await ProductModel.find().skip(skip).limit(limit);
        const totalProducts = await ProductModel.countDocuments();

        return res.json({
            products: products,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
        });
    } catch (error) {
        next(error);
    }
};


module.exports.getProductById = async (req, res, next) => {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    try {
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json(product);
    } catch (error) {
        next(error);
    }
};

module.exports.getTrendingProducts = async (req, res, next) => {
    try {
        const products = await ProductModel.find({ trending: true }).limit(4);
        return res.json(products);
    } catch (error) {
        next(error);
    }
}
