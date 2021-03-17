import React from 'react'

import './Dialogs.scss'

import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'

// import {NavLink} from "react-router-dom";


function Dialogs(props) {
    let dialogsData = [
        {id: 1, name: 'Bogdan'},
        {id: 2, name: 'Oksanka'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Dima'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Have are you'},
        {id: 3, message: 'Tupak'},
    ]

    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements = messagesData.map(el => <MessageItem id={el.id} message={el.message}/>)

    return (
        <div className="dialogs">
            <div className='dialog-items'>
                {dialogsElements}
            </div>

            <div className='messages'>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;
