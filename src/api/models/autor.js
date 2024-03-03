const mongoose = require('mongoose');

const autorShcema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    año: { type: Number, required: true },
    obras: [{ type: mongoose.Types.ObjectId, ref: 'obras' }],
  },

  {
    timestamps: true,
    collection: 'autores',
  }
);

const Autor = mongoose.model('autores', autorShcema, 'autores');
module.exports = Autor;
