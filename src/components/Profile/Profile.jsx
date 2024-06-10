import React from 'react';
import sty from './Profile.module.css';
import ProImg from './ProIMG/ProIMG';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import PostsContainer from './Posts/PostsContainer';
// import PostsContainer from './Posts/Posts';

const Profile = (props) => {

    return (
        <div className={sty.profile}>
            <ProImg />
            <PersonalInfo />
            <PostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;