var express = require('express');
const userController = require('../controller/userController');
var router = express.Router();


router.get('/cadastro', userController.cadastro);
router.post('/cadastro',userController.salvarform);
router.get('/login',userController.login);
//router.post('/criar',userController.create);
//router.get('/criar',userController.create);
//router.get('/:id/editar',userController.editar);


module.exports = router;
