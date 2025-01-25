import livro from "../models/Livro.js";

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
    try {

      const novoLivro = await livro.create(req.body);
      res.status(201).json({message: "Livro cadastrado com sucesso", livro: novoLivro });

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

}

export default LivroController;
