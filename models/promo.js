var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var promoSchema = new Schema({  
  idusuario:  { type: Number },
  urlpromo:   { type: String },
  fdesde:     { type: String },
  fhasta:     { type: String },
  verificada: { type: String, enum:['S','N'] },
  descripcion:{ type: String },
  pais:		  { type: String },
  provincia:  { type: String },
  poblacion:  { type: String },
  medio:      { type: String, enum:['ON', 'OFF', 'ONF'] },
  falta:      { type: String }
});

module.exports = mongoose.model('Promo', promoSchema);