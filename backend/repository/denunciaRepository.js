import conection from "./conection.js";

export async function EnviarDenuncia(dados){
    const comando = `insert into denuncia(assunto,data,ocorrido,email)
    values(?,?,?,?)`

    const [info] = await conection.query(comando,[
        dados.assunto,
        dados.data,
        dados.ocorrido,
        dados.email
    ]);
    return info.insertId;
}

export async function listarDenuncias() {
    const comando = `
      select id_denuncia, assunto, date_format(data, '%d/%m/%Y') as data, ocorrido
      from denuncia
      order by id_denuncia desc
    `;
  
    const [linhas] = await conection.query(comando);
    return linhas;
  }
  