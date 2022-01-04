import * as authRepository from '../data/auth.js';

export async function login(req, res, next) {
    const { username, password } = req.body;
    const user = await authRepository.checkUser(username, password);
    return user[0].username ? res.send(user[0].username) : res.send('fail login');
}

export async function register(req, res, next) {
    const { email, password, name, username } = req.body;
    await authRepository.createUser(email, password, name, username);
    return res.status(201).send('Created account!');
}