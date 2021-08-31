import React from 'react';

const RankingTitle = () => {
  return (
    <div className="ranking-title">
      <div className="ranking-title__left">
        <h3 className="ranking-title__title">상품랭킹</h3>
        <a className="ranking-title__link">전체</a>
      </div>
      <div className="ranking-title__right">
        <button type="button" className="ranking-title__all-age-btn">
          전체 연령대
          <img src={require('../../../assets/images/ico/ico_menu.png').default} className="ranking-title__menu-icon" />
        </button>
      </div>
    </div>
  );
};

export default RankingTitle;