import { Request, Response } from "express";
import Doctor from "../models/Medico";

class MedicoController {
  async cadastrar(request: Request, response: Response) {
    const nome = request.body.nome;
    const crm = request.body.crm;
    const especialidade = request.body.especialidade;

    const doctorWithSameCrm = await Doctor.find({
      crm: crm,
    });

    if (doctorWithSameCrm.length)
      return response.status(400).json("Doctor with same CRM already exists.");

    const newUser = new Doctor({
      nome,
      crm,
      especialidade,
      criadoEm: Date.now(),
    });

    const savedNewUser = await newUser.save();

    return response.status(200).json(savedNewUser);
  }

  async listar(request: Request, response: Response) {
    const doctors = await Doctor.find();

    return response.status(200).json(doctors);
  }
}

export default MedicoController;
