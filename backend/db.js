let sequelize = require('./models').sequelize;
let tokens = require('./tokens');
let { Interest } = require('./models');
let router = require('express').Router();
let sha256 = require('crypto-js/sha256'); 






(async () => {
    await sequelize.sync();
    
    console.log('server started!');

    router.post('/login', async (req,res)=>{
        if (req.body.user && req.body.pass){
            //lord forgive me for what i've sinned
            if (req.body.user === process.env.ADMINNAME && req.body.pass === sha256(process.env.ADMINSECRET).toString()){
                res.status(200).json({
                    error: false,
                    message: "Sikeres bejelentkezés!",
                    token: await tokens.GiveToken()
                });
            }
            else res.status(403).json({
                error:true,
                message: "Sikertelen bejelentkezés!"
            });
        }
        else res.status(400).json({
            error: true,
            message: "Nem küldött adatokat!"
        });
    })

    //SELECT
    router.get('/interests', async (req, res) => {
        let interests = await Interest.findAll();
        res.status(200).send(interests);
    })
    router.get('/interests/:id', async(req,res)=>{
        let interests = await Interest.findOne({where: {id:req.params.id}});
        res.json(interests);
    })

    //INSERT
    router.post('/new-interest', tokens.tokenCheck,(req, res) => {
        Interest.create({
            ...req.body
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json(error);
        });
    })

    //UPDATE
    router.patch('/update-interest/:id', tokens.tokenCheck, async (req, res) => {
        Interest.update({ ...req.body }, { where: { id: req.params.id } }).then(results => {
            res.json(results);
        }).catch(error => {
            res.status(500).json(error);
        })
    })

    //DELETE
    router.delete('/delete-interest/:id', tokens.tokenCheck, (req, res) => {
        Interest.destroy({ where: { id: req.params.id } }).then(results => {
            res.status(200).json(results);
        }).catch(err => {
            res.status(500).json(err);
        })
    })
})();








module.exports = router;