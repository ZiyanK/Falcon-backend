const { admin, database } = require('../../utils/firebase.js')

const pictureUpload = () => {
    console.log("Entered userControls");
    return new Promise((resolve, reject) => {
        var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
        var storageRef = firebase.storage().ref();
        storageRef.putString(message, 'base64')
            .then(function(snapshot) {
                console.log('Uploaded a base64 string!');
                resolve({
                    statusCode:200,
                    payload: {
                        msg: "Uploaded base64 string successfully"
                    }
                })
            })
            .catch((e) => {
                console.log("Error->", e);
            })
    })
}

const updateAction = (req) => {
    return new Promise((resolve, reject) => {
        let updateRef = db.collection('action').doc(1);
        let whatevs = updateRef.set({
            action: req.body.action
        });
    })
}

module.exports = [
    pictureUpload,
];