import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, currentValuePostActionCreator } from '../../../redux/profilePage-reducer';

const PostsContainer = (props) => {
    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };
    let activeTextPost = (text) => {
        props.store.dispatch(currentValuePostActionCreator(text))
    };

    return (<Posts
        profilePage={state.profilePage}
        addPost={addPost}
        activeTextPost={activeTextPost}
        pid={state.personalID}
    />);
}

export default PostsContainer;

