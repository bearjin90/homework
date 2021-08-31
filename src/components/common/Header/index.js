import React from 'react';
import bellIcon from '../../../assets/images/ico/ico_bell.png';
import heartIcon from '../../../assets/images/ico/ico_heart.png';
import bagIcon from '../../../assets/images/ico/ico_bag.png';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__left">
        <button className="header__btn header__btn--bell-active">
          <img src={bellIcon} alt="알림"></img>
        </button>
      </div>
      <h1 className="header__logo"><a href="/" className="header__logo-link">MUSINSA</a></h1>
      <div className="header__right">
        <button className="header__btn">
          <img src={heartIcon} alt="좋아요"></img>
        </button>
        <button className="header__btn header__btn--bag-active">
          <img src={bagIcon} alt="장바구니"></img>
          <span className="header__bag-cnt">9</span>
        </button>
      </div>
    </header>
  );
}

export default Header;