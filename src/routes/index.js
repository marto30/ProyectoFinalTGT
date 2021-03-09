const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../proyecto-final-8dfec-firebase-adminsdk-v4vfq-3ab89f475c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://proyecto-final-8dfec-default-rtdb.firebaseio.com/',
});

const db = admin.database();

router.get('/', (req, res)=>{

  res.render('index');

});

router.post('/nuevo-usuario', (req, res) => {
  console.log(req.body);
  const newUser = {
    nombre: req.body.nombre,
    apellido:req.body.apellido,
    mail: req.body.mail,
    contrasena: req.body.contrasena
  };
  db.ref('usuario').push(newUser);
  res.send('registrado');
});


module.exports = router;
