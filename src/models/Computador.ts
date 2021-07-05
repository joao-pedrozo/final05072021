import mongoose, { Schema } from "mongoose";

const Computador = new Schema({
  dono: { type: String, required: true },
  placamae: { type: String, required: true },
  processador: { type: String, required: true },
  memoria: { type: Number, required: true },
  armazenamento: { type: String, required: true },
  fonte: { type: String, required: true },
  criadoEm: { type: Date, required: true },
});

export default mongoose.model("Computador", Computador);
