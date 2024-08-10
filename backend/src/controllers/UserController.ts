import {NextFunction, Request, Response} from 'express';
import bcrypt from "bcrypt";
import UserModel from "../models/UserModel";
import {generateToken} from "../auth/auth";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new UserModel({
        username: username,
        email: email,
        password: hashedPassword
    });

    await user.save();
    const token = generateToken(user);
    return res.status(201).json({ token: token, message: 'User saved successfully' });
}

const userController = {
    signup: signup,
}

export default userController;
