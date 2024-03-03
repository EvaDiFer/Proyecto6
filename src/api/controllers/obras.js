const Obra = require('../models/obras');

const getObras = async (req, res, next) => {
  try {
    const obras = await Obra.find();
    return res.status(200).json(obras);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getobras');
  }
};

const getObrasById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obra = await Obra.findById(id);
    return res.status(200).json(obra);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getobrasbyid');
  }
};

const getObrasByCategoria = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const obras = await Obra.find({ categoria });
    return res.status(200).json(obras);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getobrasbycategoria');
  }
};

const getObrasByYear = async (req, res, next) => {
  try {
    const { year } = req.params;
    const obras = await Obra.find({ año: { $lte: year } });
    return res.status(200).json(obras);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getObrasByYear');
  }
};
const postObra = async (req, res, next) => {
  try {
    const newObra = new Obra(req.body);
    const obraSaved = await newObra.save();
    return res.status(201).json(obraSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putObra = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newObra = new Obra(req.body);
    newObra._id = id;
    const obraUpdate = await Obra.findByIdAndUpdate(id, newObra, {
      new: true,
    });
    return res.status(201).json(obraUpdate);
  } catch (error) {
    return res.status(400).json('Error en la solicitud putobra');
  }
};

const deleteObra = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obraDeleted = await Obra.findByIdAndDelete(id);
    return res.status(200).json(obraDeleted);
  } catch (error) {
    return res.status(400).json('Error en la solicitud deleteobra');
  }
};

module.exports = {
  getObras,
  getObrasById,
  getObrasByCategoria,
  getObrasByYear,
  postObra,
  putObra,
  deleteObra,
};
