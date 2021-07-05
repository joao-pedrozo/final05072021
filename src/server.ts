console.clear();

import express from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";
var cors = require("cors");

const app = express();
const db = mongoose;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
