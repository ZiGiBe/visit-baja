let sequelize = require('./models').sequelize;
let router = require('express').Router();

(async ()=>{
    await sequelize.sync();

    router.get('/:type', async(req,res)=>{
        if (sequelize.models[req.params.type]){
            try{
                let data = req.query.id ? await sequelize.models[req.params.type].findOne({where: {
                    id: req.query.id
                }}) : await sequelize.models[req.params.type].findAll();
                res.status(200).send(data);
            }
            catch(err){
                res.status(500).send(err);
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