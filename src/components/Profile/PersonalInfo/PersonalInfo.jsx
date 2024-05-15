import React from 'react';
import sty from './PersonalInfo.module.css';


const PersonalInfo = () => {
    return (
        <div className={sty.pers_info}>
            <div className={sty.avatar}><img src="https://kalix.club/uploads/posts/2023-03/1677710138_kalix-club-p-zastavka-na-glavnii-ekran-telefona-oboi-52.jpg" alt=" " /></div>
            <div className={sty.info}>Information</div>
        </div>
    );
}

export default PersonalInfo;