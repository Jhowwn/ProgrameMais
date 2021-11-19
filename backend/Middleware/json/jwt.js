import jwt from 'jsonwebtoken';

function verifyJWT(req, res, next){
    const secret = "sonho dos homens não tem fim"
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({message: "Token Não Informado"});
    }
    const parts = authHeader.split(' ');
    if(parts.length !== 2){
        return res.status(401).send({message: "Tonken Inválido"});
    }

    const [scheme, token] = parts;

    if(scheme !== "Bearer"){
        return res.status(401).send({message: "Token Inválido"});
    }

    jwt.verify(token, secret, (err, decode) => {
        if(err){
            return res.status(401).send({message: "Usuário ou senha Incorreto"});
        }
        return next();
    })
}

export {verifyJWT};