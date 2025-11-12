import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';
import 'dotenv/config'

const api = express();
api.use(express.json({ limit: "10mb" }));
api.use(express.urlencoded({ extended: true, limit: "10mb" }));
api.use(cors());

adicionarRotas(api);

api.listen(process.env.PORTA, () => console.log("API subiu com sucesso"));
