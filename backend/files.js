const path = require('path');
let router = require('express').Router();
let fs = require('fs');

let storage = require('multer').diskStorage({
    filename: (req, file, cb)=>{
        cb(null, `${file.filename}-${new Date().getTime()}`);
    },
    destination: path.join(__dirname, './uploads'),
})

const multer = require('multer')({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        if (file.mimetype.includes('image/')){
            cb(null, true)
        }
        else{
            cb(new Error('The file isn\'t an image!'), true);
        }
    }
});



router.post('/new', (req,res)=>{
    try {
        res.status(200).send(multer.array('images'));
    }
    catch (err){
        res.status(400).send(err);
    }
});
router.delete('/image', (req,res)=>{

})









module.exports = router;