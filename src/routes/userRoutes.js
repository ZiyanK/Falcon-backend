const router = require("express")();
const userControls = require('../controllers/userControls');

router.post('/uploadPicture',(req,res) => {
    console.log("Entered userRoutes");
    userControls.pictureUpload()
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).send(err))
})

router.post('/updateAction',(req,res) => {
    console.log("Entered userRoutes");
    userControls.updateAction(req.body)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).send(err))
})

module.exports=router;