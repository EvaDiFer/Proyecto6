const Autor = require('../models/autor');

const getAutores = async (req, res, next) => {
  try {
    const autores = await Autor.find().populate('obras');
    return res.status(200).json(autores);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getAutores');
  }
};

const getAutoresById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autor = await Autor.findById(id).populate('obras');
    return res.status(200).json(autor);
  } catch (error) {
    return res.status(400).json('Error en la solicitud getAutoresById');
  }
};

const postAutor = async (req, res, next) => {
  try {
    const newAutor = new Autor(req.body);
    const autorSaved = await newAutor.save();
    return res.status(201).json(autorSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAutor = await Autor.findById(id);
    const newAutor = new Autor(req.body);
    newAutor._id = id;
    newAutor.autor = [...oldAutor.autor, ...req.body.autor];
    const autorUpdate = await Autor.findByIdAndUpdate(id, newAutor, {
      new: true,
    });
    return res.status(201).json(autorUpdate);
  } catch (error) {
    return res.status(400).json('Error en la solicitud putAutor');
  }
};

const deleteAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autorDeleted = await Autor.findByIdAndDelete(id);
    return res.status(200).json(autorDeleted);
  } catch (error) {
    return res.status(400).json('Error en la solicitud deleteAutor');
  }
};

module.exports = {
  getAutores,
  getAutoresById,
  postAutor,
  putAutor,
  deleteAutor,
};
