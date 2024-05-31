import React from 'react';
import sty from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postsElements = props.profilePage.postsDB.map(p => <Post message={p.text} like={p.like} key={p.id} pid={p.pid} author={props.pid[p.pid]} />)
    let postNewElement = React.createRef();
    let addPost = () => {
        // let text = postNewElement.current.value;
        let text = props.profilePage.currentValuePost;
        // alert(text);
        // debugger;
        props.addNewPostDB(text);
    };
    let activeTextPost = () => {

        // let newText = props.currentValuePost;
        props.updateCurrentValuePost(postNewElement.current.value);
        // console.log(postNewElement.current.value)

    };


    return (
        <div className={sty.posts}>
            <div className={sty.posting}>
                <textarea ref={postNewElement} value={props.profilePage.currentValuePost} onChange={activeTextPost}
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

