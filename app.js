//1. 회원가입 -> post method: email, name, password -> ok
//2. 로그인 -> get method: email, password 체크후 token과 name 주기 -> ok
//3. 트윗 리스트 -> get method: twit messages array 보내주기 -> ok
//4. 특정 트윗 리스트 -> post method: name === click name것만 필터링해서 보내주기 -> ok
//5. 트윗 생성하기 -> post method: body에서 받은 data를 가지고 현재 name과 글을 twit에 넣어준다 -> ok
//6. 트윗 수정하기 -> put method: 현재 user와 현재 twit, 시간을 message에서 찾고 수정해서 다시 넣어주기. -> ok
//7. 트윗 삭제하기 -> delete method: user와 글 + 시간까지 겹치는 twit삭제. -> ok

//1. '/register' post
//2. '/login' get
//3. '/twit' get
//4. '/twit/:user post
//5. '/twit' post
//6. '/twit/:user' put
//7. '/twit/:user' delete
import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
// import helmet from 'helmet';
import 'express-async-errors';

import rootRouter from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(helmet());
app.use(cors());
// app.use(morgan('tiny'));


app.use('/', rootRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
})


app.listen(port, () => console.log(`server is running http://localhost:${port}`));
