import {Router} from "express";
import userController from "../controllers/UserController";

const router :Router= require('express').Router();

router.route('/')
    .post(userController.signup)

export default router;
