import React from 'react';
import sty from './Header.module.css'

const Header = () => {
  return (
    < header className={sty.header} >
      <img src="https://png.klev.club/uploads/posts/2024-03/thumbs/png-klev-club-p-molniya-ikonka-png-19.png" alt='Логотип' />
    </header >
  );
}

export default Header;