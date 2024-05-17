import React from 'react';
import sty from './Dialogues.module.css';
import DialoguesElements from './DialoguesElements';
import MessagesItems from './MessagesItems';

const Dialogues = (props) => {

    return (
        <div className={sty.dialogues}>
            <div className={sty.dialogueItems}>
                {/* {dialoguesElements(props.dialogues)} */}
                <DialoguesElements dialogues={props.dialogues} />
            </div>

            <div className={sty.messages}>
                <MessagesItems messages={props.messages} />
            </div>
        </div>
    )
}

export default Dialogues;