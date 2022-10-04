var express = require('express');
const userController = require('../controller/userController');
const multer = require('multer')
const path = require('path')
var router = express.Router();
const { storage } =  require('../config/upload');
const upload = multer({ storage });





router.get('/cadastro', userController.cadastro);
router.post('/cadastro', upload.single('avatar'), userController.salvarform);

router.get('/login',userController.login);
//router.post('/criar',userController.create);
//router.get('/criar',userController.create);
//router.get('/:id/editar',userController.editar);// 


module.exports = router;
