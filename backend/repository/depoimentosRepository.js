import conection from "./conection.js";

export async function depoimentos() {
    const comando = `
        select url, imagem, titulo, depoimento
        from depoimentos
    `
    const [registros] = await conection.query(comando);
    return registros;
}
