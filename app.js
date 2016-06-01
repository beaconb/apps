var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/promos', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
	app.listen(3000, function() {  
	  console.log("Node server running on http://localhost:3000");
	});
});

var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var models     = require('./models/promo')(app, mongoose);
var PromoCtrl = require('./controllers/promos');

// API routes
var promos = express.Router();

promos.route('/promos')  
  .get(PromoCtrl.findAllPromos)
  .post(PromoCtrl.addPromo);

promos.route('/promos/:id')  
  .get(PromoCtrl.findById)
  .put(PromoCtrl.updatePromo)
  .delete(PromoCtrl.deletePromo);

app.use('/api', promos);   

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());