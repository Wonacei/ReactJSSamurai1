const ADD_NEW_POST_DB = "ADD-NEW-POST-DB"
const UPDATE_CURRENT_VALUE_POST = "UPDATE-CURRENT-VALUE-POST"
const ADD_NEW_MESSAGE_DB = "ADD-NEW-MESSAGE-DB"
const UPDATE_CURRENT_VALUE_MESSAGE = "UPDATE-CURRENT-VALUE-MESSAGE"



let store = {
    _states: {
        profilePage: {
            postsDB: [
                { id: '1', pid: 'p00', text: 'Начинаю учить JS', like: '28' },
                { id: '2', pid: 'p02', text: 'ью кровь собаки', like: '3' },
                { id: '3', pid: 'p03', text: 'Я скоро в отпуск!', like: '16' },
                { id: '4', pid: 'p05', text: 'Отдыхаю распластавшись', like: '5' },
                { id: '5', pid: 'p01', text: 'В лето самая жара', like: '99' },
            ],
            currentValuePost: 'Мой первый тестовый пост',

        },
        dialoguesPage: {

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


        },
        personalID: {
            p00: { PID: 'p00', name: 'Wonacei', avatarSrc: 'https://pixelbox.ru/wp-content/uploads/2021/11/black-white-avatars-steam-pixelbox.ru-27.jpg' },
            p01: { PID: 'p01', name: 'Pantikruel', avatarSrc: 'https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg' },
            p02: { PID: 'p02', name: 'Deakmirion', avatarSrc: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg' },
            p03: { PID: 'p03', name: 'Jojobo', avatarSrc: 'https://android-obzor.com/wp-content/uploads/2022/02/1-6.jpg' },
            p04: { PID: 'p04', name: 'Luciliy', avatarSrc: 'https://sneg.top/uploads/posts/2023-06/1687985323_sneg-top-p-krutie-avatarki-zaitsev-krasivo-3.jpg' },
            p05: { PID: 'p05', name: 'Gargantua', avatarSrc: 'https://furman.top/uploads/posts/2023-08/1692101111_furman-top-p-zastavki-na-telefon-uzhasi-vkontakte-13.jpg' }
        },

    },

    // addNewMessageDB(newMessage) {
    //     let newText = { id: '12', message: newMessage }
    //     this._states.dialoguesPage.messagesDB.push(newText);
    //     this.rerender(store);
    // },


    subscruber(observer) {
        store.rerender = observer
    },
    rerender() {
        console.log('asdasdasd')
    },

    getStates() {
        return this._states;
    },

    dispatch(action) {
        // if (action.type === "ADD-NEW-POST-DB") {
        if (action.type === ADD_NEW_POST_DB) {
            let newText = { id: this._states.profilePage.postsDB.length + 1, pid: 'p00', text: this._states.profilePage.currentValuePost, like: '0' }
            this._states.profilePage.postsDB.push(newText);
            this._states.profilePage.currentValuePost = '';
            this.rerender(store);
            // } else if (action.type === "UPDATE-CURRENT-VALUE-POST") {
        } else if (action.type === UPDATE_CURRENT_VALUE_POST) {
            this._states.profilePage.currentValuePost = action.newText;
            this.rerender(store);
        } else if (action.type === ADD_NEW_MESSAGE_DB) {
            let newText = { id: this._states.dialoguesPage.messagesDB.length + 1, message: action.newMessage }
            this._states.dialoguesPage.messagesDB.push(newText);
            this._states.dialoguesPage.currentValueMessage = ""
            this.rerender(store);

        } else if (action.type === UPDATE_CURRENT_VALUE_MESSAGE) {
            this._states.dialoguesPage.currentValueMessage = action.newText;
            this.rerender(store);
        }
    }
}

// export const addPostActionCreator = () => {
//     return { type: "ADD-NEW-POST-DB"}
// }
export const addPostActionCreator = (text) => {
    return { type: ADD_NEW_POST_DB, newPost: text }
}

// export const currentValuePostActionCreator = (text) => {
//     return { type: "UPDATE-CURRENT-VALUE-POST", newText: text }
// return { type: "UPDATE-CURRENT-VALUE-POST", newText: postNewElement.current.value }
// }


export const currentValuePostActionCreator = (text) => {
    return { type: UPDATE_CURRENT_VALUE_POST, newText: text }
    // return { type: "UPDATE-CURRENT-VALUE-POST", newText: postNewElement.current.value }
}

export const addNewMessageDBActionCreator = (text) => {
    return { type: ADD_NEW_MESSAGE_DB, newMessage: text }
    // return { type: "UPDATE-CURRENT-VALUE-POST", newText: postNewElement.current.value }
}

export const currentValueMessageActionCreator = (text) => {
    return { type: UPDATE_CURRENT_VALUE_MESSAGE, newText: text }
    // return { type: "UPDATE-CURRENT-VALUE-POST", newText: postNewElement.current.value }
}
// 
export default store;
