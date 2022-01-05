import express from 'express';

import * as tweetController from '../controller/tweet.js';
import { isAuth } from '../middleware/auth.js';

const twitRouter = express.Router();


twitRouter.route('/')
    .get(isAuth, tweetController.getTweets) // twit 전체 메세지
    .post(isAuth ,tweetController.createTweet)
    .put(isAuth ,tweetController.updateTweet)
    .delete(isAuth ,tweetController.deleteTweet);

twitRouter.route('/:user')
    .get(tweetController.getTweet);


export default twitRouter;