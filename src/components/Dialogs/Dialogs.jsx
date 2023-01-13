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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Дмитрий" id="1"/>
                <DialogItem name="Оксана" id="2"/>
                <DialogItem name="Саша" id="3"/>
                <DialogItem name="Валерия" id="4"/>
                <DialogItem name="Костя" id="5"/>
                <DialogItem name="Катя" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Ho are u?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;