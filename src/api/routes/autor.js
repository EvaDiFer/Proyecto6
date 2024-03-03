const {
  getAutores,
  getAutoresById,
  postAutor,
  putAutor,
  deleteAutor,
} = require('../controllers/autor');

const autoresRouter = require('express').Router();

autoresRouter.get('/:id', getAutoresById);
autoresRouter.get('/', getAutores);
autoresRouter.post('/', postAutor);
autoresRouter.put('/:id', putAutor);
autoresRouter.delete('/:id', deleteAutor);

module.exports = autoresRouter;
