import {Router} from "express";
import productController from "../controllers/ProductController"

const router :Router= require('express').Router();

router.route('/')
    .get(productController.get)
    .post(productController.save)

router.route('/:id')
    .get(productController.getById)

export default router;
