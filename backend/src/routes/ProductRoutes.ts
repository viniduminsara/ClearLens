import {Router} from "express";
import productController from "../controllers/ProductController"
import {authenticateToken} from "../auth/auth";

const router :Router= require('express').Router();

router.route('/')
    .get(authenticateToken, productController.get)
    .post(productController.save)

router.route('/:id')
    .get(productController.getById)

export default router;
