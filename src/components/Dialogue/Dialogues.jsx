import React from 'react';
import sty from './Dialogues.module.css';
import DialoguesElements from './DialoguesElements';
import MessagesItems from './MessagesItems';

const Dialogues = (props) => {
    let newMessageText = React.createRef();
    let changeMessageText = () => {
        let newText = newMessageText.current.value
        props.changeMessageText(newText);
    }
    let addNewMessage = () => {
        let text = newMessageText.current.value;
        props.addNewMessage(text);
    }
    // debugger;
    return (
        <div className={sty.dialogues}>
            <div className={sty.dialogueItems}>
                <DialoguesElements dialogues={props.dialoguesPage.dialoguesDB} pid={props.pid} />
            </div>

            <div className={sty.messages}>
                <MessagesItems messages={props.dialoguesPage.messagesDB} />
                <input
                    ref={newMessageText}
                    value={props.dialoguesPage.currentValueMessage}
                    type="text"
                    onChange={changeMessageText}
                />
                <button onClick={addNewMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogues;