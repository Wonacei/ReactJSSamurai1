const ADD_NEW_POST_DB = "ADD-NEW-POST-DB"
const UPDATE_CURRENT_VALUE_POST = "UPDATE-CURRENT-VALUE-POST"

let initialState = {
    postsDB: [
        { id: '1', pid: 'p00', text: 'Начинаю учить JS', like: '28' },
        { id: '2', pid: 'p02', text: 'ью кровь собаки', like: '3' },
        { id: '3', pid: 'p03', text: 'Я скоро в отпуск!', like: '16' },
        { id: '4', pid: 'p05', text: 'Отдыхаю распластавшись', like: '5' },
        { id: '5', pid: 'p01', text: 'В лето самая жара', like: '99' },
    ],
    currentValuePost: 'Мой первый тестовый пост',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST_DB:
            let newText = {
                id: state.postsDB.length + 1,
                pid: 'p00',
                text: state.currentValuePost,
                like: '0'
            }
            state.postsDB.push(newText);
            state.currentValuePost = '';
            return state;
        case UPDATE_CURRENT_VALUE_POST:
            state.currentValuePost = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return { type: ADD_NEW_POST_DB, newPost: text }
}

export const currentValuePostActionCreator = (text) => {
    return { type: UPDATE_CURRENT_VALUE_POST, newText: text }
}
