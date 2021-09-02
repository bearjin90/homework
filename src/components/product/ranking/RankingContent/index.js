import React from 'react';
import SubTab from '../../../SubTab';
import SubVisualSlider from '../../../SubVisualSlider';
import ButtonWrap from '../../../buttons/ButtonWrap';
import ArrowButton from '../../../buttons/ArrowButton';
import RankingTitle from '../RankingTitle';
import RankingList from '../RankingList';

const RankingContent = () => {
  return (
    <section className="ranking-content">
      <RankingTitle />
      <SubTab category={'ranking'} />
      <RankingList start={0} end={5} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={5} end={14} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={5} end={14} />
      <ButtonWrap>
        <ArrowButton text={'상품 전체 보기'} />
      </ButtonWrap>
    </section>
  );
};

export default RankingContent;