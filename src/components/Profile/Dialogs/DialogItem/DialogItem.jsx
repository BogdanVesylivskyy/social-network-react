import React from 'react'

import './../Dialogs.scss'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    const path = '/dialogs/' + props.id;

    return (
        <div className='dialog'><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default DialogItem;
