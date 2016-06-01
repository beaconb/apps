//File: controllers/promos.js
var mongoose = require('mongoose');  
var Promo  = mongoose.model('Promo');

//GET - Return all promos from the DB
exports.findAllPromos = function(req, res) {  
    Promo.find(function(err, promos) {
    if(err){
		res.send(500, err.message);
	}

    console.log('GET /promos');
    res.status(200).jsonp(promos);
    });
};
//GET - Return a promo from the DB
exports.findById = function(req, res) {  
    Promo.findById(req.params.id, function(err, promo) {
    if(err){
		return res.send(500, err.message);
	}

    console.log('GET /promo/' + req.params.id);
    res.status(200).jsonp(promo);
    });
};
//POST - Insert a new promo in the DB
exports.addPromo = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var promo = new Promo({
        idusuario:    req.body.idusuario,
        urlpromo:     req.body.urlpromo,
        fdesde:  	  req.body.fdesde,
        fhasta:   	  req.body.fhasta,
        verificada:   req.body.verificada,
        descripcion:  req.body.descripcion,
		pais:         req.body.pais,
		provincia:    req.body.provincia,
		poblacion:    req.body.poblacion,
		medio:  	  req.body.medio,
        falta:  	  req.body.falta
    });

    promo.save(function(err, promo) {
        if(err) return res.status(500).send( err.message);
		res.status(200).jsonp(promo);
    });
};

//PUT - Update a register already exists
exports.updatePromo = function(req, res) {  
    Promo.findById(req.params.id, function(err, promo) {

        promo.idusuario   =  req.body.idusuario;
        promo.urlpromo    =  req.body.urlpromo;
        promo.fdesde	  =  req.body.fdesde;
        promo.fhasta	  =  req.body.fhasta;
        promo.verificada  =  req.body.verificada;
        promo.descripcion =  req.body.descripcion;
		promo.pais	 	  =  req.body.pais;
		promo.provincia   =  req.body.provincia;
		promo.poblacion   =  req.body.poblacion;
		promo.medio		  =  req.body.medio;
        promo.falta		  =  req.body.falta;
		
        promo.save(function(err) {
            if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(promo);
        });
    });
};

//DELETE - Delete a Promo with specified ID
exports.deletePromo = function(req, res) {  
    Promo.findById(req.params.id, function(err, promo) {
        promo.remove(function(err) {
            if(err) res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};