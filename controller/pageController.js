const pageController = {
    home: (req,res) => {
        res.render('home')
    },
    roupas:(req,res) =>{
        res.render('roupas')
    },
    tenis:(req,res) =>{
        res.render('tenis')
    },
    marcas:(req,res) =>{
        res.render('marcas')
    },
    acesssorios:(req,res) =>{ 
    
        return res.render('acessorios')
    },
    sale:(req,res) =>{
        res.render('sale')
    }

};
module.exports = pageController;