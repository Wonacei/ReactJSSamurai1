import React from 'react'
import { NavLink } from 'react-router-dom';

// let dialoguesElements = dialoguesDB.map(d => <DialogItem name={d.name} id={d.id} />)

const DialoguesElements = (props) => {
    let dialogueList = props.dialogues.map(d => (<li key={d.id}><NavLink to={`/dialogues/${d.id}`}>{d.name}</NavLink></li>))
    return (
        <ul>
            {dialogueList}
        </ul>
    )
}



export default DialoguesElements;