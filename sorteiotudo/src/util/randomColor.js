// Retorna uma color exadecimal aleatória
const randomColor = _ =>
    '#' + ((1 << 24) * Math.random() | 0).toString(16).slice(0, 4);

export { randomColor };
