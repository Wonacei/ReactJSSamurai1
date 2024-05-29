import React from 'react';
import sty from './Dialogues.module.css';
import DialoguesElements from './DialoguesElements';
import MessagesItems from './MessagesItems';

const Dialogues = (props) => {
    let newMessageText = React.createRef();
    let addNewMessage = () => {
        let text = newMessageText.current.value;
        props.dialoguesPage.addNewMessageDB(text);
    }

    return (
        <div className={sty.dialogues}>
            <div className={sty.dialogueItems}>
                {/* {dialoguesElements(props.dialogues)} */}
                <DialoguesElements dialogues={props.dialoguesPage.dialoguesDB} pid={props.pid} />
            </div>

            <div className={sty.messages}>
                <MessagesItems messages={props.dialoguesPage.messagesDB} />
                <input ref={newMessageText} type="text" />
                <button onClick={addNewMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogues;