import { depoimentos } from "../repository/depoimentosRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/depoimentos', async (req,resp) => {
    const registros = await depoimentos();
    resp.send(registros);
})

export default endpoints