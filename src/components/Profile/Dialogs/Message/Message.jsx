import React from 'react'

import './../Dialogs.scss'
import {NavLink} from "react-router-dom";

function MessageItem(props) {
    return (
        <div className="message">{props.message}</div>
    )
}

export default MessageItem;
