import conection from "./conection.js";

export async function contarCursandoPorCurso(nomeCurso) {
  const [rows] = await conection.query(
    `
    SELECT COUNT(m.id_matricula) AS total_cursando
    FROM tb_matricula m
    JOIN tb_curso c ON c.id_curso = m.id_curso
    WHERE m.cursando = TRUE
      AND LOWER(c.nome_curso) LIKE LOWER(CONCAT('%', ?, '%'))
    GROUP BY c.nome_curso
    `,
    [nomeCurso]
  );
  return rows[0]?.total_cursando || 0;
}

export async function contarConcluidoPorCurso(nomeCurso) {
  const [rows] = await conection.query(
    `
    SELECT COUNT(m.id_matricula) AS total_concluido
    FROM tb_matricula m
    JOIN tb_curso c ON c.id_curso = m.id_curso
    WHERE m.concluido = TRUE
      AND LOWER(c.nome_curso) LIKE LOWER(CONCAT('%', ?, '%'))
    GROUP BY c.nome_curso
    `,
    [nomeCurso]
  );
  return rows[0]?.total_concluido || 0;
}
