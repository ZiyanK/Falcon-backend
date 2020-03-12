const router = require("express")();
var firebase = require("firebase");
const userControls = require('../controllers/userControls');

firebase.initializeApp({
    serviceAccount: "./firebase-key.json",
    databaseURL: "https://hack4cause-4ef45.firebaseio.com"
  }); 

var db = firebase.database();
var ref = db.ref("/notfication");

router.post('/updateAction',(req,res) => {
    console.log("Entered userRoutes");
    let timestamp = req.body.timestamp;
    let activity = req.body.activity;
    ref.push({
        timestamp: timestamp,
        activity: activity
    })
    ref.once("value", function(snapshot) {
        var data = snapshot.val();
        console.log(data);
      })
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).send(err))
})

router.post('/uploadPicture',(req,res) => {
    console.log("Entered userRoutes");
    var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
        var storageRef = firebase.storage().ref();
        storageRef.putString(message, 'base64')
        .then(function(snapshot) {
            console.log('Uploaded a base64 string!');
        })
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).send(err))
})

module.exports=router;