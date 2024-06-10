import React from 'react';
import { addNewMessageDBActionCreator, currentValueMessageActionCreator } from '../../redux/dialoguesPage-reducer';
import Dialogues from "./Dialogues"

const DialoguesContainer = (props) => {
    let state = props.store.getState();

    let changeMessageText = (text) => {
        props.store.dispatch(currentValueMessageActionCreator(text))
    }
    let addNewMessage = (text) => {
        props.store.dispatch(addNewMessageDBActionCreator(text));
    }
    return (
        <Dialogues
            dialoguesPage={state.dialoguesPage}
            pid={state.personalID}
            changeMessageText={changeMessageText}
            addNewMessage={addNewMessage}
        />
    )
}

export default DialoguesContainer;