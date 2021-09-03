import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__left">
        <button type="button" className="icon-svg icon-svg--bell icon-svg--bell-active">
          <span className="blind">알림</span>
        </button>
      </div>
      <h1 className="header__logo"><a href="#" className="header__logo-link">MUSINSA</a></h1>
      <div className="header__right">
        <button type="button" className="icon-svg icon-svg--heart">
          <span className="blind">좋아요</span>
        </button>
        <button type="button" className="icon-svg icon-svg--bag icon-svg--bag-active">
          <span className="blind">장바구니</span>
          <span className="bag-cnt">9</span>
        </button>
      </div>
    </header>
  );
}

export default Header;