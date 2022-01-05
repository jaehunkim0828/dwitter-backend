import express from 'express';

import loginRouter from './login.js';
import registerRouter from './register.js';
import * as authRepository from '../../data/auth.js';
import { isAuth } from '../../middleware/auth.js';

const authRouter = express.Router();

authRouter.route('/')
    .get(async (req, res, next) => {
        res.send( await authRepository.getUsers());
    })
authRouter.route('/me')
    .get(isAuth, async (req, res, next) => {
        const user = await authRepository.getById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found '});
        }
        return res.send(user.username);
    })


authRouter.use('/login', loginRouter);
authRouter.use('/register', registerRouter);

export default authRouter;