import React from 'react';

const RankingTitle = () => {
  return (
    <div className="ranking-title">
      <div className="ranking-title__left">
        <h3 className="ranking-title__title">상품랭킹</h3>
        <a href="#" className="ranking-title__link">전체</a>
      </div>
      <div className="ranking-title__right">
        <button type="button" className="ranking-title__all-age-btn">
          전체 연령대
          <span className="icon-svg icon-svg--all-menu"></span>
        </button>
      </div>
    </div>
  );
};

export default RankingTitle;