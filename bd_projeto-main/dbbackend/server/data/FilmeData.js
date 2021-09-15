const database = require('../conf/database');

exports.getFilmes = function () {
    return database.query('SELECT f.titulo_idtitulo, f.video_idvideo, t.titulo, t.sinopse, t.ano, f.datalancamento, v.duracao, v.caminhodoarquivo ' + 
    'FROM netprime.filme f INNER JOIN netprime.titulo t ON (t.idtitulo = f.titulo_idtitulo) ' + 
    'INNER JOIN netprime.video v ON (f.video_idvideo = v.idvideo)')
}

exports.getFilme = function ( id ) {
    return database.query( 'SELECT * FROM netprime.filme WHERE titulo_idtitulo = $1', [id]);
}

exports.createTitulo = function(tit, sin, ano) {
    return database.one('INSERT INTO netprime.titulo (titulo, sinopse, ano) ' +  
            'VALUES ($1, $2, $3) returning *', [tit, sin, ano]); 
}

exports.createVideo = function(dur, path) {
    return database.one('INSERT INTO netprime.video (duracao, caminhodoarquivo) ' + 
            'VALUES ($1, $2) returning *', [dur, path]); 
}

exports.createFilme = function(datalan, idT, idV) {
    return database.one('INSERT INTO netprime.filme (datalancamento, titulo_idtitulo, video_idvideo) ' +
            'VALUES ($1, $2, $3) returning *', [datalan, idT, idV]);
}

exports.updateTitulo = function (idTitulo, tit, sin, ano) {
    return database.none('UPDATE netprime.titulo SET titulo = $1, sinopse = $2, ano = $3 ' +
            'WHERE idtitulo = $4', [tit, sin, ano, idTitulo]);
}

exports.updateVideo = function (idVideo, dur, path) {
    return database.none('UPDATE netprime.video SET duracao = $1, caminhodoarquivo = $2' + 
            'WHERE idvideo = $3', [dur, path, idVideo]);
}

exports.deleteFilme = function (id) {
    return database.oneOrNone('DELETE FROM netprime.filme WHERE titulo_idtitulo = $1', [id]);
}
