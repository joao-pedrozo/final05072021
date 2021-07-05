import mongoose, { Schema } from "mongoose";

const Doctor = new Schema({
  nome: { type: String, required: true },
  crm: { type: String, required: true },
  especialidade: { type: String, required: true },
  criadoEm: { type: Date },
});

export default mongoose.model("Doctor", Doctor);
