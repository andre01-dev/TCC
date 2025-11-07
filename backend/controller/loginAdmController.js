import { Router } from "express";
import { verificarLoginAdm } from "../repository/loginAdmRepository.js";

const endpoints = Router();

endpoints.post("/loginadm", async (req, resp) => {
  try {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return resp.status(400).send({ ok:false, mensagem: "Usuário e senha são obrigatórios" });
    }

    const adm = await verificarLoginAdm(usuario, senha);

    if (adm) {
      return resp.send({ ok: true, mensagem: "Login realizado com sucesso!" });
    } else {
      return resp.send({ ok: false, mensagem: "Usuário ou senha incorretos" });
    }

  } catch (err) {
    console.log(err);
    resp.status(500).send({ ok:false, mensagem: "Erro no servidor" });
  }
});

export default endpoints;