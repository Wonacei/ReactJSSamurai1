import React from 'react';
import sty from './Post.module.css';


const Post = (props) => {
    return (
        <div className={sty.post}>
            {/* <div key={props.key} className={sty.post}> */}
            <img src='https://pixelbox.ru/wp-content/uploads/2021/11/black-white-avatars-steam-pixelbox.ru-27.jpg' alt=" " />
            {props.message}
            <p>Like <span>{props.like}</span></p>
        </div>
    );
}

export default Post;