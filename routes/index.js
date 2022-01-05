import express from 'express';

import twitRouter from './twit.js';
import authRouter from './auth/index.js';

const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/twit', twitRouter);


export default rootRouter;
