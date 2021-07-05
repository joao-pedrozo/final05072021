import { Request, Response } from "express";
import Computador from "../models/Computador";

class ComputadorController {
  async cadastrar(request: Request, response: Response) {
    const dono = request.body.dono;
    const placamae = request.body.placamae;
    const processador = request.body.processador;
    const memoria = request.body.memoria;
    const armazenamento = request.body.armazenamento;
    const fonte = request.body.fonte;

    const computador = await Computador.findOne({ dono });

    if (computador) {
      response.status(400).json("Já existe um computador com esse mesmo dono.");
      return;
    }

    const newComputador = new Computador({
      dono,
      placamae,
      processador,
      memoria,
      armazenamento,
      fonte,
      criadoEm: Date.now(),
    });

    const savedUser = await newComputador.save();

    response.status(200).json(savedUser);
  }

  async listar(request: Request, response: Response) {
    const computadores = await Computador.find();

    response.status(200).json(computadores);
  }

  async remover(request: Request, response: Response) {
    const id = request.params.id;

    const removedUser = await Computador.findOneAndRemove({ _id: id });

    if (removedUser) {
      response.status(200).json(removedUser);
      return;
    }

    response.status(400).json("Usuário não encontrado");
  }
}

export default ComputadorController;
