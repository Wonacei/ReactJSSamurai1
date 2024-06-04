import React from 'react';
import sty from './Posts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, currentValuePostActionCreator } from '../../../states';



const Posts = (props) => {
    let postsElements = props.profilePage.postsDB.map(p => <Post message={p.text} like={p.like} key={p.id} pid={p.pid} author={props.pid[p.pid]} />)
    let postNewElement = React.createRef();
    let addPost = () => {
        // let text = props.profilePage.currentValuePost;
        // eslint-disable-next-line no-undef
        props.dispatch(addPostActionCreator())
    };
    let activeTextPost = () => {
        props.dispatch(currentValuePostActionCreator(postNewElement.current.value))
    };

    return (
        <div className={sty.posts}>
            <div className={sty.posting}>
                <textarea
                    ref={postNewElement}
                    value={props.profilePage.currentValuePost}
                    onChange={activeTextPost}
                ></textarea>
                <button onClick={addPost}>Пости</button>
            </div>
            <div className={sty.postArea}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;

