import React from 'react';
/**
 * Componente Row para agrupar as colunas;
 */
const Row = props => {
    const row = props.row || 'row';
    return (
        <div className={row}>
            {props.children}
        </div>
    )
};

export default Row;