import express from 'express';
import { body } from 'express-validator';

import * as authController from '../../controller/auth.js'
import { validate } from '../../middleware/validator.js';

const loginRouter = express.Router();

const validateCredential = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('username should be at least 5 characters'),
    body('password')
        .trim()
        .isLength({ min: 5})
        .withMessage('password should be at least 5 char'),
    validate,
]

loginRouter.route('/')
    .post(validateCredential, authController.login);

export default loginRouter;