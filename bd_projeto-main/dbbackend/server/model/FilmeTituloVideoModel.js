module.exports = class FilmeTituloVideo {
    constructor (idtit, idvid, titulo, sinopse, datalancamento, ano, duracao, caminhodoarquivo) {
        this.titulo_idtitulo = idtit; 
        this.video_idvideo = idvid;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.datalancamento = datalancamento;
        this.ano = ano;
        this.duracao = duracao;
        this.caminhodoarquivo = caminhodoarquivo;
    }
}
