import React from 'react';
import sty from './Dialogues.module.css';
import { Link } from 'react-router-dom';



let dialoguesDB = [
    { name: 'Gargantua', id: '01' },
    { name: 'Pantikruel', id: '02' },
    { name: 'Deakmirion', id: '03' },
    { name: 'Luciliy', id: '04' },
    { name: 'Jojobo', id: '05' }
]

let messagesDB = [
    { id: '1', message: 'HI' },
    { id: '2', message: 'ты где' },
    { id: '3', message: 'нету там' },
    { id: '4', message: 'за шкафом' },
    { id: '5', message: 'врунишка' },
    { id: '6', message: 'врунишка' },
    { id: '7', message: 'врунишка' },
    { id: '8', message: 'врунишка' },
    { id: '9', message: 'врунишка' },
    { id: '10', message: 'врунишка' },
    { id: '11', message: 'byeeeee' },
]

const DialogItem = (props) => {
    return (
        <div>
            <Link to={`/dialogues/${props.id}`}>{props.name}</Link>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div>{props.message}</div>
    )
}

let dialoguesElements = dialoguesDB.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElements = messagesDB.map(m => <MessageItem id={m.id} message={m.message} />)

const Dialogues = () => {

    return (
        <div className={sty.dialogues}>
            <div className={sty.dialogueItems}>
                {dialoguesElements}
            </div>

            <div className={sty.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues;