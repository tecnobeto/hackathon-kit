var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var Contato = require('./app/models/contatos');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       

var mongodbUri = 'mongodb://betovieira:66427174h@ds027835.mongolab.com:27835/heroku_prx51dxr';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options, function(err) {
    if (err) {
        console.log('Erro ao conectar com mongodb: ' + err);
    }
});

/*Conexão com mongodb
mongoose.connect('mongodb://heroku_prx51dxr:fh95rlssp23s4s4tl974520kda@ds027835.mongolab.com:27835/heroku_prx51dxr', function(err) {
    if (err) {
        console.log('Erro ao conectar com mongodb: ' + err);
    }
});*/


app.use(bodyParser());

var port = process.env.PORT || 8080;

var router = express.Router();

// Rotas da api
router.get('/', function(req, res){
    res.json( {message : 'Enviei uma mensagem legal!'} );
});


//Configurando rotas legais!
router.route('/contatos')
    .get(function(req, res){
        Contato.find(function(err, rows) {
            if (err) {
                res.send('Erro: ' + err);
            }
            res.json(rows);
            
        });    
    
    })
    .post(function(req, res){
        var model = new Contato();
        model.nome = req.body.nome;
        
        model.save(function(err) {
            if (err) {
                res.send(err); 
            }
            res.json( { message: 'Cadastrado com suceso!' } );

        });
    
    });

router.route('/contatos/:id')
    .get(function(req, res){
        Contato.findById(req.params.id, function(err, row) {
            if(err) {
                res.send(err);
            }
            res.json(row);  
        });
    })
    .put(function(req, res){
        Contato.findById(req.params.id, function(err, row){
            if (err) {
                res.send(err);
            }
            
            row.nome = req.body.nome;
            
            row.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json( { message : 'Contato alterado com sucesso!' } );
            });
            
            
        });
    })
    .delete(function(req,res){
        Contato.remove( { _id : req.params.id }, function(err, row) {
            if (err) {
                res.send(err);
            }  
            
            res.json( {message : 'Contato excluído com sucesso! ' });
            
        });
    });



//Registrando nas rotas
app.use('/api', router);

// Inicia o servidor
app.listen(port, function(){
    console.log('SERVIDOR RODANDO NA PORTA: ' + port);
    
});

