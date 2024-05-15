import React from 'react';
import sty from './Profile.module.css';
import ProImg from './ProIMG/ProIMG';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Posts from './Posts/Posts';


const Profile = () => {
    return (
        <div className={sty.profile}>
            <ProImg />
            <PersonalInfo />
            <Posts />
        </div>
    );
}

export default Profile;