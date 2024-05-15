import React from 'react';
import sty from './Posts.module.css';
import Post from './Post/Post';

let postsDB = [
    { id: '1', text: 'Начинаю учить JS', like: '28' },
    { id: '2', text: 'ью кровь собаки', like: '3' },
    { id: '3', text: 'Я скоро в отпуск!', like: '16' },
]

let postsElements = postsDB.map(p => <Post message={p.text} like={p.like} />)

const Posts = () => {
    return (
        <div className={sty.posts}>
            <div className={sty.posting}>
                <textarea></textarea>
                <button>Пости</button>
            </div>
            <div className={sty.postArea}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;