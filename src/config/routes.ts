import { Router } from "express";
import MedicoController from "../controllers/MedicoController";

const router = Router();
const medicoController = new MedicoController();

router.post("/medico/cadastrar", medicoController.cadastrar);
router.get("/medico/listar", medicoController.listar);

export { router };
