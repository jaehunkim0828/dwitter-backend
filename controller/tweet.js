import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res) {
    console.log(req.userId);
    const tweets = await tweetRepository.getAll();
    res.send(tweets)
};

export async function getTweet(req, res) {
    const { user } = req.params;
    const userTwits = await tweetRepository.getUser(user);
    res.status(200).send(userTwits);  //특정 트윗 보여주기.
}

export async function createTweet(req, res,) {
    const { name, time, text } = req.body;
    await tweetRepository.create(name, time, text);
    res.status(201).send('CREATED twit'); //twit 생성
}

export async function updateTweet(req, res) {
    const { username, time, text } = req.body;
    const tweet = await tweetRepository.getById(username);

    if (tweet.id !== req.userId) {
        return res.sendStatus(403);
    }
    const isSucceed = await tweetRepository.update(username, time, text);
    console.log(isSucceed);
    if (isSucceed) return res.status(200).send('secceed PUT method');
    return res.status(404).send('fail PUT method');
}

export async function deleteTweet(req, res) {
    const { name, time, text } = req.body;
    const isSucceed = await tweetRepository.remove(name, time, text);
    console.log(isSucceed);
    return isSucceed ? 
        res.status(204).send('secceed DELETE method') 
            :
        res.status(404).send('fail DELETE method')
}