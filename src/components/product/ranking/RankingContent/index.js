import React from 'react';
import SubTab from '../../../SubTab';
import SubVisualSlider from '../../../SubVisualSlider';
import ButtonWrap from '../../../buttons/ButtonWrap';
import ArrowButton from '../../../buttons/ArrowButton';
import RankingTitle from '../RankingTitle';
import RankingList from '../RankingList';
import ProductInfo from '../../ProductInfo';

const RankingContent = () => {
  return (
    <section className="ranking-content">
      <RankingTitle />
      <SubTab category={'ranking'} activeTab={0} />
      <RankingList start={0} end={5} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={5} end={14} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={14} end={26} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={26} end={38} />
      <SubVisualSlider category={'ranking'} />
      <RankingList start={38} end={50} />
      <ProductInfo refresh={15} />
      <ButtonWrap>
        <ArrowButton text={'상품 랭킹 전체 보기'} />
      </ButtonWrap>
    </section>
  );
};

export default RankingContent;