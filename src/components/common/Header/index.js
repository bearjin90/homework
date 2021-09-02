import React from 'react';
import bellIcon from '../../../assets/images/ico/ico_bell.png';
import heartIcon from '../../../assets/images/ico/ico_heart.png';
import bagIcon from '../../../assets/images/ico/ico_bag.png';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__left">
        <button className="icon-svg icon-svg--bell icon-svg--bell-active">
          <span className="blind">알림</span>
        </button>
      </div>
      <h1 className="header__logo"><a href="/" className="header__logo-link">MUSINSA</a></h1>
      <div className="header__right">
        <button className="icon-svg icon-svg--heart">
          <span className="blind">좋아요</span>
        </button>
        <button className="icon-svg icon-svg--bag icon-svg--bag-active">
          <span className="blind">장바구니</span>
          <span className="bag-cnt">9</span>
        </button>
      </div>
    </header>
  );
}

export default Header;