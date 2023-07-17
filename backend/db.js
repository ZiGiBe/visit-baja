const {Op} = require('sequelize');
const { tokenCheck } = require('./modules/tokens');
let sequelize = require('./models').sequelize;
let TokenCheck = require('./modules/tokens').tokenCheck;
let router = require('express').Router();

(async ()=>{
    await sequelize.sync();
    router.use(tokenCheck);
    router.get('/:type', TokenCheck,async(req,res)=>{
        if (sequelize.models[req.params.type]){
            try{
                if (req.query.field && req.query.value){
                    let data;
                    let whereclause = {};
                    
                    if (req.query.operator){
                        whereclause[req.query.field]= {
                            [Op[req.query.operator]]: req.query.value
                        };
                        if (req.query.modelId) {
                            whereclause['itemId'] = {
                                [Op[req.query.operator]]: req.query.modelId
                            }
                        }
                    }
                    else{
                        whereclause[req.query.field] = req.query.value;
                    }
                    data = await sequelize.models[req.params.type].findAll({where: whereclause})
                    res.status(200).send(data)
                }
                else{
                    let data = req.query.id ? await sequelize.models[req.params.type].findOne({where: {
                        id: req.query.id
                    }}) : await sequelize.models[req.params.type].findAll();
                    res.status(200).send(data);
                }
            }
            catch(err){
                res.status(500).send(err);
                console.log(err);
            }
            
        }
        else res.status(400).send({
            message: 'Bad Model!'
        });
    });

    router.patch('/:type', async(req,res)=>{
        if (req.query.id){
            if (sequelize.models[req.params.type]){
                try {
                    let response = await sequelize.models[req.params.type].update(req.body, {where: {
                        id: req.query.id
                    }});
                    res.status(200).send(response);
                }
                catch (err){
                    res.status(500).send(err);
                }
            }
            else{
                res.status(400).send({
                    message: 'Bad Model!'
                });
            }
        }
        else {
            res.status(403).send({
                message: 'Please give an ID!'
            });
        }
    })

    router.post('/:type', async(req,res)=>{
        if (sequelize.models[req.params.type]){
            try{
                let response = await sequelize.models[req.params.type].create(req.body);
                res.status(200).send(response);
            }
            catch (err){
                res.status(500).send(err);
            }
        }
        else res.status(400).send({
            message: 'Bad Model!'
        })
    })

    router.delete('/:type', async(req,res)=>{
        if (req.query.id){
            if (sequelize.models[req.params.type]){
                try{
                    let response = await sequelize.models[req.params.type].destroy({where:{id: req.query.id}});
                    res.status(200).send({
                        deletedRows: response
                    });
                }
                catch (err){
                    res.status(500).send(err);
                }
            }
            else{
                res.status(400).send({
                    message: "Bad Model!"
                })
            }
        }
        else{
            res.status(403).send({
                message: 'Please give an ID!'
            });
        }
    })

})();
 
module.exports = router;