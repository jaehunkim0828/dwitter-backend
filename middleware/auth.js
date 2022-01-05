import jwt from 'jsonwebtoken';
import * as authRepository from '../data/auth.js';
import { config } from '../config.js';

const AUTH_ERROR = { message: 'Authentication Error '};
const secretKey = 'random';

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json(AUTH_ERROR);
    }
    console.log(config.secretKey);

    const token = authHeader.split(' ')[1];
    
    jwt.verify(
        token, 
        secretKey, 
        async (error, decoded) => {
        
        if (error) {
            console.log('token is null');
            return res.status(401).json(AUTH_ERROR);
        }
        const user = await authRepository.getById(decoded.id);
        if (!user) {
            console.log()
            console.log(2);
            return res.status(401).json(AUTH_ERROR);
        }
        req.userId = user.id;
        next();
    })
}