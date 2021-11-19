import jwt from 'jsonwebtoken';

function generateToken(idLogin, user){
    const secret = "sonho dos homens não tem fim"
    return jwt.sign({infoUser:{
        idUser: idLogin,
        userName: user
    }},secret)
}

export {generateToken}