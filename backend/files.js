const path = require('path');
let router = require('express').Router();
let fs = require('fs');

let storage = require('multer').diskStorage({
    filename: (req, file, cb)=>{
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
    destination: path.join(__dirname, './uploads'),
})

const multer = require('multer')({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf'){
            cb(null, true)
        }
        else{
            cb(new Error('The file isn\'t an image!'), false);
        }
    }
});



router.post('/new', (req,res)=>{
    try {
        console.log(req.body);
        multer.any('images')(req,res, (err)=>{
            if (err) res.status(500).send(err);
            else {
                res.status(200).send(req.files);
            }
        })
    }
    catch (err){
        res.status(400).send(err);
        throw err;
    }
});
router.delete('/image', (req,res)=>{

})



router.post('/tourinform/new', (req,res)=>{
    try{
        multer.single('file')(req,res, (err)=>{
            if (err)
            {
                console.log(err);
                res.status(500).send({
                    success: 0,
                })
            }
            else {
                res.status(200).send({
                    success: 1,
                    file: req.file
                })
            }
        })
    }
    catch (err){
        console.log(err);
        res.status(500).send({success:0})
    }
})





module.exports = router;