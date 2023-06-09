let TokenCheck = require('./modules/tokens').tokenCheck;

let Router = require('express').Router();



Router.post('/login', (req,res)=>{
    
})
Router.post('/logout', TokenCheck, (req,res)=>{

})

module.exports = Router;