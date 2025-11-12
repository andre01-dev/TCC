import conection from "./conection.js";

export async function verificarLoginAdm(usuario, senha) {
  const comando = `
    SELECT id_loginadm, usuario
    FROM tb_loginadm
    WHERE usuario = ? AND senha = ?;
  `;

  const [linhas] = await conection.query(comando, [usuario, senha]);
  return linhas[0];
}