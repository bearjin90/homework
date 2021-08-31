import React from 'react';
import RankingTitle from '../RankingTitle';
import SubTab from '../SubTab';
import SubVisualSlider from '../SubVisualSlider';
import RankingList from '../RankingList';

const RankingContent = () => {
  return (
    <section className="ranking">
      <RankingTitle />
      <SubTab category={'ranking'} />
      <RankingList start={0} end={5} />
      <SubVisualSlider category={'ranking1'} />
      <RankingList start={5} end={14} />
      <SubVisualSlider category={'ranking2'} />
      <RankingList start={2} end={14} />
    </section>
  );
};

export default RankingContent;