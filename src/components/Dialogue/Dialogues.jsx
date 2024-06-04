import React from 'react';
import sty from './Dialogues.module.css';
import DialoguesElements from './DialoguesElements';
import MessagesItems from './MessagesItems';
import { addNewMessageDBActionCreator, currentValueMessageActionCreator } from '../../states';

const Dialogues = (props) => {
    let newMessageText = React.createRef();
    let changeMessageText = () => {
        let newText = newMessageText.current.value
        props.dispatch(currentValueMessageActionCreator(newText))
        // props.dialoguesPage.currentValueMessage = newText
        // console.log(newText)
    }
    // let activeTextMessage = () => {
    //     props.dispatch(currentValueMessageActionCreator())
    // }
    let addNewMessage = () => {
        // debugger;
        let text = newMessageText.current.value;
        props.dispatch(addNewMessageDBActionCreator(text));
        // debugger;

        // console.log(text)

    }

    return (
        <div className={sty.dialogues}>
            <div className={sty.dialogueItems}>
                {/* {dialoguesElements(props.dialogues)} */}
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