const {
  getObras,
  getObrasByCategoria,
  getObrasById,
  getObrasByYear,
  postObra,
  putObra,
  deleteObra,
} = require('../controllers/obras');

const obrasRouter = require('express').Router();

obrasRouter.get('/year/:year', getObrasByYear);
obrasRouter.get('/categoria/:categoria', getObrasByCategoria);
obrasRouter.get('/:id', getObrasById);
obrasRouter.get('/', getObras);
obrasRouter.post('/', postObra);
obrasRouter.put('/:id', putObra);
obrasRouter.delete('/:id', deleteObra);

module.exports = obrasRouter;
