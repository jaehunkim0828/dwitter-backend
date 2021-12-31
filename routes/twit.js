import express from 'express';

const twitRouter = express.Router();
const twit = [{ name: 'Jaehun', time: new Date(), text: 'hello my name is jaehun i want to refund'}];

twitRouter.route('/')
    .get((_, res) => res.send())


export default twitRouter;