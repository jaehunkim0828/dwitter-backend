import express from 'express';

const userRouter = express.Router();
const users = [{ email: 'kkaa81@naver.com', password: '123456', name: 'jaehun' }];

userRouter.route('/')
    .get((_, req) => {
        req.send(users);

    })
    .post((res, req) => {
        const { email, password, name, type } = res.body;
        console.log(`POST: type is ${type}`);
        //회원가입
        if (type === 'register') {
            //회원가입 할때
            users.push({ email, password, name });
            return req.send('register secceed');
        }
        if (type === 'login') {
            //로그인 할때
           const user =  users.filter(user => user.email === email && user.password === password );
           console.log(user);
            user.length > 0 ? req.send(user[0].name) : req.send('fail login');
        }
    })


export default userRouter;