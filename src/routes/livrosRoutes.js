import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.listarLivrosPorEditora);
routes.post('/livros', LivroController.cadastrarLivro);
routes.get('/livros/:id', LivroController.listarLivroPorId);
routes.put('/livros/:id', LivroController.atualizarLivro);
routes.delete('/livros/:id', LivroController.apagarLivro);


export default routes;
