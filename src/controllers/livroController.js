import livro from "../models/Livro.js";
import { autor } from '../models/Autor.js';

class LivroController {


  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({})
      res.status(200).json(listaLivros);
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao retornar os livros"});
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "Livro cadastrado com sucesso", livro: livroCriado });

    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao cadastrar o livro"})
    }

  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao retornar o livro"});
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "livro atualizado"});
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao atualizar os dados do livro"});
    }

  }

  static async apagarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "livro apagado com sucesso"});
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao apagar o livro"});
    }

  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {

      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json({message: "Editora encontrada com sucesso", data: livrosPorEditora });
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao encontrar a editora"});
    }

  }

}

export default LivroController;
