import express from 'express';
import * as tweetController from '../controller/tweet.js';

const twitRouter = express.Router();


twitRouter.route('/')
    .get(tweetController.getTweets) // twit 전체 메세지
    .post(tweetController.createTweet)
    .put(tweetController.updateTweet)
    .delete(tweetController.deleteTweet);

twitRouter.route('/:user')
    .get(tweetController.getTweet);


export default twitRouter;