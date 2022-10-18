var express = require('express');
const produtoController = require('../controller/produtoController');
const multer = require('multer')
const path = require('path')
var router = express.Router();
const { storage } =  require('../config/upload');
const upload = multer({ storage });




module.exports = router;

