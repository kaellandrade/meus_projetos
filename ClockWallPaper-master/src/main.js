const fs = require('fs');
const request = require('request');
const wallpaper = require('wallpaper');

// Parâmetros passados pelo node
const TIME_DEFAULT = 1; // 5 minutos por padrão
const CATEGORIES_DEFAULT = [
  'animals',
  'plant',
  'cliff',
  'space',
  'abstract',
];

const MINUTOS = Number(process.argv[2]) || TIME_DEFAULT;

const CATEGORIES = process.argv[3] || CATEGORIES_DEFAULT.join(','); // recebe as CATEGORIES por parâmetro

/**
 * Usando Unsplash para capturar imagens 
 */

const URL = `https://source.unsplash.com/1600x900/?${CATEGORIES}` //'https://source.unsplash.com/1600x900/?nature,water'
const PATH = `${__dirname}/unsplash/img.png`


/**
 * Realiza o download da imagem
 */
const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

/**
 * Define a imagem baixada como papel de parede
 */
const setWallpaper = _ => {
  wallpaper.set(PATH);
}


const test = _ => download(URL, PATH, () => {
  const dataNow = new Date();
  dataNow.setMinutes(dataNow.getMinutes() + MINUTOS);
  setWallpaper();
  console.log(`Próxima imagem: ${dataNow.toLocaleTimeString()} 🕒`);
})
setInterval(test, MINUTOS * 60000);
