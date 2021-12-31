import express from 'express';

import twitRouter from './twit.js';
import userRouter from './user.js';

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/twit', twitRouter);


export default rootRouter;
