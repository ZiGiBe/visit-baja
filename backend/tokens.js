require('dotenv').config();
const jose = require('jose');
const {createSecretKey} = require('crypto')
tokenCheck = async (req, res, next) => {

    if (req.headers.authorization) {
        const secret = createSecretKey(process.env.JWTSECRET, 'utf-8');
        const jwt = req.headers.authorization.split(' ')[1];
        try{
            const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
                issuer: process.env.JWTISSUER,
                audience: process.env.JWTAUDIENCE
            })
            next();
        }
        catch (error){
            res.status(403).send(error);
        }
    }
    else res.status(500).json({
        error: "err_no_token",
        message: "No token was given!"
    })
    
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