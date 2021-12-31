import express from 'express';

const userRouter = express.Router();
const users = [{ email: 'kkaa81@naver.com', password: '123456', name: 'jaehun' }];

sRouter.route('/')
    .get((_, req) => {
        req.send('users page');

    })
    .post((res, req) => {
        const { email, password, name, type } = res.body;
        //회원가입
        if (type === 'register') {
            return users.push({ email, password, name });
        }

        users.filter(user => {
            
        })
    })


export default userRouter;