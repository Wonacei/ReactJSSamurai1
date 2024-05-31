// import { rerender } from "./rerender";
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
            currentValuePost: '',

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
    addNewPostDB(newPost) {
        // { states.statesPage.postsDB.lenght + 1 }
        let newText = { id: '6', pid: 'p00', text: newPost, like: '0' }
        // debugger;
        this._states.profilePage.postsDB.push(newText);
        this._states.profilePage.currentValuePost = '';
        store.rerender(store);
    },
    updateCurrentValuePost(newText) {

        this._states.profilePage.currentValuePost = newText;
        store.rerender(store);
    },


    addNewMessageDB(newMessage) {
        let newText = { id: '12', message: newMessage }
        this._states.dialoguesPage.messagesDB.push(newText);
        this.rerender(store);
    },


    subscruber(observer) {
        store.rerender = observer
    },
    rerender() {
        console.log('asdasdasd')
    },

    getStates() {
        return this._states;
    }
}

// export let addNewPostDB = (newPost) => {
//     // { states.statesPage.postsDB.lenght + 1 }
//     let newText = { id: '6', pid: 'p00', text: newPost, like: '0' }
//     // debugger;
//     states.profilePage.postsDB.push(newText);
//     states.profilePage.currentValuePost = '';
//     rerender(states);
// }
// export let updateCurrentValuePost = (newText) => {

//     states.profilePage.currentValuePost = newText;
//     rerender(states);
// }
// export let addNewMessageDB = (newMessage) => {
//     let newText = { id: '12', text: { newMessage } }
//     states.dialoguesPage.messagesDB.push(newText);
// }
// import React from 'react'

// let rerender = () => {
//     console.log('asdasdasd')

// }

// export let subscruber = (observer) => {
//     rerender = observer
// }

export default store;
