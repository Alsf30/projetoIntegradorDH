const fs = require('fs');
const { type } = require('os');
const {v4} = require('uuid');
let db = require('../database/db.json');

const writeToDB = () =>{
    const json = JSON.stringify(db);
    fs.writeFileSync('database/db.json', json);
}


const Users = {
    create: (usuario,avatar) => {
        db.usuario.push({id: v4(),...usuario,avatar});
        writeToDB()
    }
}

module.exports = Users