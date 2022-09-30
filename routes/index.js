var express = require('express');
var router = express.Router();

const pageController = require('../controller/pageController');
const carrinhoController = require('../controller/carrinhoController');
const userController = require('../controller/userController');


router.get("/home",pageController.home )
router.get("/roupas",pageController.roupas )
router.get("/tenis",pageController.tenis )
router.get("/marcas",pageController.marcas )
router.get("/acessorios",pageController.acesssorios)
router.get("/sale",pageController.sale )




module.exports = router;

router.get('/ping', (req,res) => {
    res.json({pong:true})
})

router.get('/random', (req,res) => {
    let nRand =  Math.floor(Math.random() * 10)
    res.json({number: nRand})
})
 router.get('/nome/:nome', (req,res) => {
    let nome = req.params.nome
    res.json({nome: `você enviou o nome ${nome}`})
 })


// fazer as rotas do pageController
