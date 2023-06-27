require('dotenv').config();
let fs = require('fs');
let path = require('path');
const jose = require('jose');
const {createSecretKey} = require('crypto')


async function CheckBlacklist(token){
    return await fs.readFileSync(path.join(__dirname, '../blacklist.json'), (err, data)=>{
        if (err) return false;
        else{
            return JSON.parse(data).includes(token);
        }

    })
}


const tokenCheck = async (req, res, next) => {

    if (req.headers.authorization) {
        let tokens = JSON.parse(await CheckBlacklist()).toString();
        if (tokens.includes(req.headers.authorization.split(' ')[1])){
            res.status(403).send({
                message: 'Your token is on the blacklist!',
                error: 'err_token_used'
            })
        }
        else{
            const secret = createSecretKey(process.env.JWTSECRET, 'utf-8');
            const jwt = req.headers.authorization.split(' ')[1];
            try{
                await jose.jwtVerify(jwt, secret, {
                    issuer: process.env.JWTISSUER,
                    audience: process.env.JWTAUDIENCE
                })
                next();
            }
            catch (error){
                res.status(403).send(error);
            }
        }
        
    }
    else 
    {
        if (req.method == "GET"){
            if (req.params.type == "Users" || req.params.type == "Blacklist"){
                res.status(401).json({
                    error: 'err_unauthorized',
                    message: 'You are not permitted to access this resource!'
                })
            }
            else
            next();
        }
        else res.status(401).json({
            error: "err_no_token",
            message: "No token was given!"
        })
    }
    
    
    
}
async function GiveToken() {
    const secret = createSecretKey(process.env.JWTSECRET, 'utf-8');
    return await new jose.SignJWT({'valid':true})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer(process.env.JWTISSUER)
        .setAudience(process.env.JWTAUDIENCE)
        .setExpirationTime('5h')
        .sign(secret);
}
module.exports = { tokenCheck, GiveToken };