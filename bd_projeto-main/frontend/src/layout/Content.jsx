/**
 * Coponente onde irá ficar os conteúdos de cada
 * página
 */
import React from 'react';

const Content = props => {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default Content;