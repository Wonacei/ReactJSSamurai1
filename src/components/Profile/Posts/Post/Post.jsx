import React from 'react';
import sty from './Post.module.css';


const Post = (props) => {
    return (
        <div className={sty.post}>
            <img src={props.author.avatarSrc} alt="AvatarIco" />
            {props.author.name}
            {props.message}
            <p>Like <span>{props.like}</span></p>
        </div>
    );
}

export default Post;