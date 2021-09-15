import React from 'react';

/**
 * Essa função recebe uma string no padrão de colunas do Bootstrap
 * (xs sm md lg) e devolve sua classse;
 * Ex: 12 6 4 3 -> col-xs-12 col-sm-6 col-md-4 col-lg-3
 */
const toBootstrapCols = (string) =>{
    const cols = string ? string.split(' '): [];
    let classes = '';
    if(cols[0]) classes += `col-xs-${cols[0]}` //Telas muito pequenas
    if(cols[1]) classes += ` col-sm-${cols[1]}` // Telas pequenas
    if(cols[2]) classes += ` col-md-${cols[2]}` // Telas médias
    if(cols[3]) classes += ` col-lg-${cols[3]}` // Telas grandes


    return classes;
}
/**
 * Componente Grid onde será organizado as colunas
 */
const Grid = props => {
    const gridClass = toBootstrapCols(props.cols || '12');
    return (
        <div className={`${gridClass} ${props.className || ''}`}>
            {props.children}
        </div>
    )
};

export default Grid;