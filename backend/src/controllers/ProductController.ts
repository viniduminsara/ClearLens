import {NextFunction, Request, Response} from 'express';
import mongoose from "mongoose";
import ProductModel from "../models/ProductModel";

const saveProduct = async (req: Request, res: Response, next: NextFunction) => {
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
    } catch (error: any) {
        next(error);
    }
}

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //@ts-ignore
        const products = await ProductModel.find();
        return res.json(products);
    } catch (error: any) {
        next(error);
    }
}

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    try {
        //@ts-ignore
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json(product);
    } catch (error: any) {
        next(error);
    }
};

const productController = {
    get: getProducts,
    save: saveProduct,
    getById: getProductById,
}

export default productController;
