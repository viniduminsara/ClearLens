const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader){
        return res.status(401).json({ message: 'Unauthorized: Missing token'});
    }
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token){
        return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        req.user = user;
        next();
    })
}
