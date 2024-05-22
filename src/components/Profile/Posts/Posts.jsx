import React from 'react';
import sty from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.text} like={p.like} key={p.id} pid={p.pid} author={props.pid[p.pid]} />)
    let postNewElement = React.createRef();
    let addPost = () => {
        let text = postNewElement.current.value;
        // alert(text);
        props.addNewPostDB(text);
    }

    return (
        <div className={sty.posts}>
            <div className={sty.posting}>
                <textarea ref={postNewElement}></textarea>
                <button onClick={addPost}>Пости</button>
            </div>
            <div className={sty.postArea}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;