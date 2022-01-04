import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = [{ id: 1, email: 'kkaa81@naver.com', password: '123456', name: 'jaehun', username: '재훈' }];
const secretKey = 'random';

export async function getUsers() {
    return users;
}

export async function checkUser(username, password) {
    const haveUser = [];
    for (let i = 0; i < users.length; i += 1) { 
        if (bcrypt.compareSync(password, users[i].password) && users[i].username === username) {
            const token = jwt.sign({
                //user id
                id: users[i].id
            },
            secretKey,
            {
                expiresIn: '2d'
            });
            console.log(token);
            haveUser.push({ token, username });
        }
    }
    if (haveUser.length) return haveUser;
    return [{ message: '아이디 비밀번호 확인해주세요 '}];
}

export async function createUser(email, password, name, username) {
    users.map(user => {
        if (user.email === email) {
            return { message: 'email이 이미 존재합니다.'}
        }
        if (user.username === username) {
            return { message: '닉네임이 존재합니다.' }
        }
    })
    const id = new Date().toString();
    const hashed = bcrypt.hashSync(password, 10); 
    users.push({ id, email, password: hashed, name, username });
    return;
}

export async function getById(id) {
    return users.find(user => user.id === id);
}