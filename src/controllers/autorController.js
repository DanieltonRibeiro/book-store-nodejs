import { autor } from "../models/Autor.js";

class AutorController {


  static async listarAutors(req, res, next) {
    try {
      const listaAutors = await autor.find({})
      res.status(200).json(listaAutors);
    } catch (erro) {
      next(erro)
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {

      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor });

    } catch (erro) {
      next(erro)
    }

  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);
      res.status(200).json(AutorEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualizado"});
    } catch (erro) {
      next(erro);
    }

  }

  static async apagarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor apagado com sucesso"});
    } catch (erro) {
      next(erro);
    }

  }

}

export default AutorController;
