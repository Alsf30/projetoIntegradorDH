const cadastroUserController = {
    index:(req,res) =>{res.render('cadastroUser')},
    
    create:(req,res) => {
        let {nomeUser,sobrenomeUser,idadeUser,cpfUser,telefoneUser,emailUser,cepUser} = req.body;        
        res.redirect('/users/login')
        },  
    login: (req,res) => {
        res.render('login')
    },   
    editar: (req,res) => {
        let {id} = req.params;
        res.send('eu quero editar o produto' + id);
    },


}

 


    module.exports = cadastroUserController;