import React from 'react';
/**
 * Componente genérico para agrupar linhas e colunas;
 */
const Container = props => {
    const container = props.container || 'container';
    return (
        <div className={container}>
            {props.children}
        </div>
    )
};

export default Container;