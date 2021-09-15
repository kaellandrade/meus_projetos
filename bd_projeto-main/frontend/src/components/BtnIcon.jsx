import React from 'react';

/**
 * Componente Botão com Icon
 * Classes do Bootstrap [primary, secondary, success, dangers, info, light, dark]
 */
const BtnIcon = (props) => {
    let color = props.color || 'primary';
    let style = props.outline ? `outline-` : '';
    let size = props.size || 'btn-lg';
    return (
        <button type="submit" onClick={props.onClick} className={`btn btn-${style}${color} ${size}`}>
            <i className={props.icon}></i> {props.children}
        </button>
    )
}
export default BtnIcon;