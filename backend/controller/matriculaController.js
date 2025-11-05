import { Router } from "express";
import { contarConcluidoPorCurso, contarCursandoPorCurso } from "../repository/matricularepository.js";

const endpoints = Router(); // 🔹 Adicionado para inicializar o Router

endpoints.get("/curso/relatorio/fakenews", async (req, res) => {
    try {
      const nomeCurso = "Fake News"; // 🔹 fixo aqui
  
      const cursando = await contarCursandoPorCurso(nomeCurso);
      const concluido = await contarConcluidoPorCurso(nomeCurso);
  
      res.json({
        curso: nomeCurso,
        cursando,
        concluido,
      });
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
      res.status(500).json({ message: "Erro ao gerar relatório" });
    }
  });

export default endpoints;
