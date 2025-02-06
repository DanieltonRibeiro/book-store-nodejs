import mongoose from 'mongoose';
import app from '../app.js';

function manipuladorDeErros() {
  app.use((erro, request, response, _) => {
    if ( erro instanceof mongoose.Error.CastError ){
      response.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos" });
    } else if (erro instanceof mongoose.Error.ValidationError) {
      const mensagensErro = Object.values(erro.errors)
                                  .map(erro => erro.message)
                                  .join(";")
      response.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });

    } else {
      response.status(500).send({ message: "Erro interno de servidor" })
    }
  })
}

export { manipuladorDeErros };
