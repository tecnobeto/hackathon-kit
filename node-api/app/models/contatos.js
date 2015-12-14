var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Criando Schema
var ContatoSchema = new Schema({
    nome : {type: String, required: true, }
});

module.exports = mongoose.model('Contato', ContatoSchema);