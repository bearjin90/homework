import React from 'react';
import SubTab from '../SubTab';
import SubVisualSlider from '../SubVisualSlider';
import RankingList from '../RankingList';

const RankingContent = () => {
  return (
    <section className="ranking">
      <div className="ranking-title">
        <div className="ranking-title__left">
          <h3 className="ranking-title__title">상품랭킹</h3>
          <a className="ranking-title__link">전체</a>
        </div>
        <div className="ranking-title__right">
          <button type="button" className="ranking-title__all-age-btn">
            전체 연령대
            <img src={require('../../assets/images/ico/ico_menu.png').default} className="ranking-title__menu-icon" />
          </button>
        </div>
      </div>
      <SubTab category={'ranking'} />
      <RankingList start={0} end={5} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={5} end={14} />
    </section>
  );
};

export default RankingContent;