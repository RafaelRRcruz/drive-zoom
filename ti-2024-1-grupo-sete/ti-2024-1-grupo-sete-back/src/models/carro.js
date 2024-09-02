const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  ano: { type: String, required: true },
  dono: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cliente', 
    required: true 
  },
  cidade: { type: String, required: true },
  preco: { type: Number, required: true },
  diaAlugadoInicio: { type: Date },
  diaAlugadoFinal: { type: Date },
  consumoEstrada: { type: String },
  consumoCidade: { type: String },
  motor: { type: String },
  cambio: { type: String },
  multimidia: { type: String },
  detalhe: { type: String },
  diasAlugado: { type: [Date] },
});

module.exports = mongoose.model('Carro', CarroSchema);
