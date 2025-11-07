import { Router } from "express";
import { contarConcluidoPorCurso, contarCursandoPorCurso } from "../repository/matricularepository.js";

const endpoints = Router(); 

endpoints.get("/curso/relatorio/fakenews", async (req, res) => {
    try {
      const nomeCurso = "Fake News"; 
  
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


endpoints.get("/curso/relatorio/comprasonline", async (req, res) => {
  try {
    const nomeCurso = "Compras Online de Forma Segura"; 

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

endpoints.get("/curso/relatorio/pagamentosseguros", async (req, res) => {
  try {
    const nomeCurso = "Pagamentos Seguros"; 

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

endpoints.get("/curso/relatorio/organizacaodigital", async (req, res) => {
  try {
    const nomeCurso = "Organização Digital"; 

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

endpoints.get("/curso/relatorio/criandoeusandoemail", async (req, res) => {
  try {
    const nomeCurso = "Criando e Usando E-mail"; 

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

endpoints.get("/curso/relatorio/introducaoeinteligenciaartificial", async (req, res) => {
  try {
    const nomeCurso = "Introdução a Inteligência Artificial"; 

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

endpoints.get("/curso/relatorio/educacacofinanceiradigital", async (req, res) => {
  try {
    const nomeCurso = "Educação Financeira Digital"; 

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

endpoints.get("/curso/relatorio/senhasseguras", async (req, res) => {
  try {
    const nomeCurso = "Senhas Seguras"; 

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

endpoints.get("/curso/relatorio/golpes", async (req, res) => {
  try {
    const nomeCurso = "Golpes"; 

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
