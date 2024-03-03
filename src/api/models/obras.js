const mongoose = require('mongoose');

const obraShcema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    año: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'retrato',
        'paisaje',
        'abstracto',
        'naturaleza muerta',
        'pintura de historia',
        'figurativo',
      ],
    },
  },

  {
    timestamps: true,
    collection: 'obras',
  }
);

const Obra = mongoose.model('obras', obraShcema, 'obras');
module.exports = Obra;
