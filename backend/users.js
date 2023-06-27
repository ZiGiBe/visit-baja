let TokenCheck = require('./modules/tokens').tokenCheck;
let path = require('path');
let GiveToken = require('./modules/tokens').GiveToken
let fs = require('fs');
const { Users } = require('./models')
let Router = require('express').Router();



Router.post('/login',async (req, res) => {
    try {
        let user = await Users.findAll({
            where: {
                password: req.body.password,
                username: req.body.username
            }
        })
        if (user.length>0){
            let token = await GiveToken();
            res.status(200).send({
                token: token
            });
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
})
Router.post('/logout', TokenCheck, async (req, res) => {
    let blacklist = JSON.parse(await ReadFileList());
    blacklist.push(req.headers.authorization.split(' ')[1]);
    await WriteToBlacklist(res, blacklist);
})




async function ReadFileList() {
    return await fs.readFileSync(path.join(__dirname, './blacklist.json'), (err, data) => {
        if (err) return [];
        else return data;
    });
}
async function WriteToBlacklist(res, blacklist) {
    await fs.writeFileSync(path.join(__dirname, './blacklist.json'), JSON.stringify(blacklist), (err) => {
        if (err) res.status(500).send(err);
        else res.status(200).send({ message: 'Successful logout!' });
    })
}
module.exports = Router;