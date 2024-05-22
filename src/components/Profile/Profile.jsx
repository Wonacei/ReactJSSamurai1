import React from 'react';
import sty from './Profile.module.css';
import ProImg from './ProIMG/ProIMG';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Posts from './Posts/Posts';


const Profile = (props) => {
    return (
        <div className={sty.profile}>
            <ProImg />
            <PersonalInfo />
            <Posts posts={props.posts.postsDB} pid={props.pid} addNewPostDB={props.addNewPostDB} />
        </div>
    );
}

export default Profile;