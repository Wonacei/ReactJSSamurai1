import React from 'react';
import sty from './Header.module.css'

const Header = () => {
  return (
    < header className={sty.header} >
      <img src='https://avatars.mds.yandex.net/i?id=d905712c8d4bca9dd763e0c8275ab047833470c7-12518569-images-thumbs&n=13' alt='' />
    </header >
  );
}

export default Header;