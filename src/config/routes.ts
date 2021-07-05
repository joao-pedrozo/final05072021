import { Router } from "express";
import MedicoController from "../controllers/MedicoController";
import ComputadorController from "../controllers/ComputadorController";

const router = Router();
const medicoController = new MedicoController();
const computadorController = new ComputadorController();

router.post("/medico/cadastrar", medicoController.cadastrar);
router.get("/medico/listar", medicoController.listar);

router.post("/computador/cadastrar", computadorController.cadastrar);
router.get("/computador/listar", computadorController.listar);
router.delete("/computador/remover/:id", computadorController.remover);

export { router };
