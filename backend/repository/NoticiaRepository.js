import conection from "./conection.js";

export async function ListarNoticias() {
    const comando = `
        select caminho_img1, titulo, subtitulo, conteudo1, conteudo2
        from noticias`
    
    const [registros] = await conection.query(comando);
    return registros
}

export async function NoticiaEspecifica(id_noticias) {
    const comando = `
        select titulo, 
        from noticias
        where id_noticias = ?`
    
    const [registros] = await conection.query(comando, [id_noticias]);
    return registros;
}





