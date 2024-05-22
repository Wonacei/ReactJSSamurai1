import React from 'react'
import { NavLink } from 'react-router-dom';
import sty from './DialoguesElements.module.css'

// let dialoguesElements = dialoguesDB.map(d => <DialogItem name={d.name} id={d.id} />)

const dialoguesElements = (props) => {

    let dialogueList = props.dialogues.map(d => (<li key={d.id}><img src={props.pid[d.pid].avatarSrc} alt="avatarIco" /><NavLink to={`/dialogues/${d.id}`}>{props.pid[d.pid].name}</NavLink></li>))
    return (
        <ul className={sty.wrap}>

            {dialogueList}
        </ul>
    )
}



export default dialoguesElements;