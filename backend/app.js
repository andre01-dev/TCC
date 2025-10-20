import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';


const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

api.listen(process.env.PORTA, () => console.log("API subiu com sucesso"));
