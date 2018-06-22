// setup bcrypt
// const bcrypt = require('bcrypt-as-promised');

User = require('../models/user.js') //import the model
module.exports ={
    index: function(req, res){
        return res.sendFile('index');
    }   
}