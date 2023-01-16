import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Дмитрий'}, 
        {id: 2, name: 'Оксана'}, 
        {id: 3, name: 'Саша'}, 
        {id: 4, name: 'Валерия'}, 
        {id: 5, name: 'Костя'}, 
        {id: 6, name: 'Женя'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are u?'}, 
        {id: 3, message: 'Yo'}, 

    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;