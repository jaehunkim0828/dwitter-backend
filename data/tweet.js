const tweets = [
    { 
        id: 1,
        username: '재훈', 
        time: new Date(), 
        text: 'hello my name is jaehun i want to refund',
    }
];

export async function getAll() {
    return tweets;
}

export async function create(name, time, text) {
    if (!name || !time || !text) return res.status(404).send('fail twit');
    tweets.push({ name, time, text }); 
    return;
}

export async function update(name, time, text) {
    let bool = false;
    tweets.map((tweet, i) => {
        if (tweet.name === name && tweet.time === time) {
            tweets[i] = { name, time, text };
            bool = true;
        }
    })
    return bool ? true : false;
}

export async function remove(name, time, text) {
    let bool = false;
    tweets.map((tweet, i ) => {
        if (tweet.name === name && tweet.time === time && tweet.text === text) {
            tweets.splice(i, 1);
            bool = true;
        }
    })
    
    return bool ? true : false;
}

export async function getUser(user) {
    return tweets.filter(twit => twit.name === user);
}

export async function getById(name) {
    return tweets.find(tweet => tweet.name === name);
}