import conection from "./conection.js";

export async function ListarNoticias() {
    const comando = `
        SELECT id_noticias, caminho_img1, titulo, subtitulo, conteudo1, conteudo2
        FROM noticias
    `;
    const [registros] = await conection.query(comando);
    return registros;
}


export async function NoticiaEspecifica(id_noticias) {
    const comando = `
        SELECT id_noticias, caminho_img1, titulo, subtitulo, conteudo1, conteudo2
        FROM noticias
        WHERE id_noticias = ?
    `;
    const [registros] = await conection.query(comando, [id_noticias]);
    return registros[0];
}