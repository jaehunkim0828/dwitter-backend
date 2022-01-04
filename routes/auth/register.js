import express from 'express';
import { body } from 'express-validator';

import * as authController from '../../controller/auth.js'
import { validate } from '../../middleware/validator.js'

const registerRouter = express.Router();

const validateSignup = [
    body('name').notEmpty().withMessage('name is missing'),
    body('email').isEmail().normalizeEmail().withMessage('invalid email'),
    validate
];

registerRouter.route('/')
    .post(validateSignup, authController.register);

export default registerRouter;


