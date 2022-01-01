import express from 'express';

const twitRouter = express.Router();
const twits = [{ name: 'Jaehun', time: new Date(), text: 'hello my name is jaehun i want to refund'}];

twitRouter.route('/')
    .get((_, res) => res.send(twits)) // twit 전체 메세지
    .post((req, res,) => {
        const { name, time, text } = req.body;
        if (!name || !time || !text) return res.status(404).send('fail twit');
        twits.push(req.body); 
        res.status(201).send('CREATED twit'); //twit 생성
    })
    .put((req, res) => {
        const { name, time, text } = req.body;
        twits.map((twit, i) => {
            if (twit.name === name && twit.time === time) {
                twits[i] = { name, time, text };
                return res.status(200).send('secceed PUT method');
            }
        })
        return res.status(404).send('fail PUT method');
    })
    .delete((req, res) => {
        const { name, time, text } = req.body;
        twits.map((twit, i ) => {
            if (twit.name === name && twit.time === time && twit.text === text) {
                twits.splice(i, 1);
                return res.satatus(200).send('secceed DELETE method')
            }
        })
        return res.status(404).send('fail DELETE method');
    })

twitRouter.route('/:user')
    .get((req, res) => {
        const { user } = req.params;
        const userTwits = twits.filter(twit => twit.name === user);
        res.status(200).send(userTwits);  //특정 트윗 보여주기.
    })


export default twitRouter;