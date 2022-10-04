const Users = require('../models/users')

const userController = {
    cadastro: (req, res) => {
        res.render('cadastro')
        // funções

    },
    login: (req, res) => {
        res.render('login')
    },

    salvarform: (req,res) => {
        const formulario = req.body;
        const avatar = req.file.filename;
        Users.create(formulario,avatar);
        res.redirect('/users/login');
       }

};
module.exports = userController;