import express from "express";
import AutorController from '../controllers/autorController.js';

const routes = express.Router();


routes.get('/autores', AutorController.listarAutors);
routes.post('/autores', AutorController.cadastrarAutor);
routes.get('/autores/:id', AutorController.listarAutorPorId);
routes.put('/autores/:id', AutorController.atualizarAutor);
routes.delete('/autores/:id', AutorController.apagarAutor);


export default routes;
