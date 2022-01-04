import jwt from 'jsonwebtoken';
import * as authRepository from '../data/auth.js';

const AUTH_ERROR = { message: 'Authentication Error '};
const secretKey = 'random';

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        console.log('he');
        return res.status(401).json(AUTH_ERROR);
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, secretKey, async (error, decoded) => {
        if (error) {
            console.log(1);
            return res.status(401).json(AUTH_ERROR);
        }
        const user = await authRepository.getById(decoded.id);
        if (!user) {
            console.log(2);
            return res.status(401).json(AUTH_ERROR);
        }
        req.userId = user.id;
        next();
    })
}