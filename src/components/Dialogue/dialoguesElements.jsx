import React from 'react'
import { Link } from 'react-router-dom';

// let dialoguesElements = dialoguesDB.map(d => <DialogItem name={d.name} id={d.id} />)

const DialogueElements = (props) => {
    let dialoguesElements = props.dialogues.map(d => <DialogItem name={d.name} id={d.id} />)
    return (
        <div>
            <Link to={`/dialogues/${props.id}`}>{props.name}</Link>
        </div>
    )
}



export default dialoguesElements;