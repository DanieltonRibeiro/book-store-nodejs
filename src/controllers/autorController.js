import { autor } from "../models/Autor.js";

class AutorController {


  static async listarAutors(req, res) {
    try {
      const listaAutors = await autor.find({})
      res.status(200).json(listaAutors);
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao retornar os Autors"});
    }
  }

  static async cadastrarAutor(req, res) {
    try {

      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor });

    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao cadastrar o autor"})
    }

  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);
      res.status(200).json(AutorEncontrado);
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao retornar o Autor"});
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualizado"});
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao atualizar os dados do Autor"});
    }

  }

  static async apagarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor apagado com sucesso"});
    } catch (erro) {

      res.status(500).json({message: "Houve um erro ao apagar o Autor"});
    }

  }

}

export default AutorController;
