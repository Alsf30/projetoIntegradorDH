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

        res.redirect ('/users/login');

    },
};
module.exports = userController;