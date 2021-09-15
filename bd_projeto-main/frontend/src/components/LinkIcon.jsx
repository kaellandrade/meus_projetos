import React from 'react';
import {Link} from "react-router-dom";

/**
 * Componente Botão com Icon
 * Classes do Bootstrap [primary, secondary, success, dangers, info, light, dark]
 */
const LinkIcon = (props) => {
    let color =  props.color || 'primary';
    let style = props.outline? `outline-` : '';
    return (
        <Link to={props.to} className={`btn btn-${style}${color}`}>
            <i className={props.icon}></i> {props.children}
        </Link>
    )
}
export default LinkIcon;