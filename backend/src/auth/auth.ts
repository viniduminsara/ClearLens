import {User} from "../types/User";

const jwt = require('jsonwebtoken');
import {NextFunction, Request, Response} from 'express';
import {IUserModel} from "../models/UserModel";
const dotenv = require('dotenv').config();

export const generateToken = (user: any) => {
    const payload = {
        id: user._id,
        email: user.email,
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');
    if (!authHeader){
        return res.status(401).json({ message: 'Unauthorized: Missing token'});
    }
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token){
        return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user:IUserModel) => {
        if (err){
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        //@ts-ignore
        req.user = user;
        next();
    })
}
