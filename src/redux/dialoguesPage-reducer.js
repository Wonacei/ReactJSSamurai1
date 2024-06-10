const ADD_NEW_MESSAGE_DB = "ADD-NEW-MESSAGE-DB"
const UPDATE_CURRENT_VALUE_MESSAGE = "UPDATE-CURRENT-VALUE-MESSAGE"

let initialState = {

    dialoguesDB: [
        { pid: 'p01', id: '02' },
        { pid: 'p05', id: '01' },
        { pid: 'p02', id: '03' },
        { pid: 'p04', id: '04' },
        { pid: 'p03', id: '05' }
    ],
    messagesDB: [
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
    ],
    currentValueMessage: 'Пустая строка',
}
export const dialogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_DB:
            let newText = { id: state.messagesDB.length + 1, message: action.newMessage }
            state.messagesDB.push(newText)
            state.currentValueMessage = ""
            return state;
        case UPDATE_CURRENT_VALUE_MESSAGE:
            state.currentValueMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export const addNewMessageDBActionCreator = (text) => {
    return { type: ADD_NEW_MESSAGE_DB, newMessage: text }
}

export const currentValueMessageActionCreator = (text) => {
    return { type: UPDATE_CURRENT_VALUE_MESSAGE, newText: text }
}
