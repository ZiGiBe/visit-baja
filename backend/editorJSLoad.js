const { writeFile, readFile } = require('fs');
const path = require('path');

let router = require('express').Router();


router.post('/save', async (req,res)=>{
    await writeFile(path.join(__dirname, './editorLatest.json'), JSON.stringify(req.body.editorjsoutput), (err)=>{
        if (err) res.status(500).send({message: 'Could not save the editor!'});
        else{
            res.status(200).send({message: 'Save success!'});
        }
    })
})

router.get('/latest', async(req,res)=>await GetEditorData(req, res));


async function GetEditorData(req,res){
    await readFile(path.join(__dirname, './editorLatest.json'), (err, data)=>{
        if (err) res.status(500).send({message: 'Could not retrieve editor data!'}) ;
        else res.status(200).send(JSON.parse(data));
    })
}


module.exports=router;