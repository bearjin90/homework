import React from 'react';
import SubTab from '../../../SubTab';
import SubVisualSlider from '../../../SubVisualSlider';
import ButtonWrap from '../../../buttons/ButtonWrap';
import ArrowButton from '../../../buttons/ArrowButton';
import CoordiThumbList from '../CoordiThumbList';
import CoordiStyleList from '../CoordiStyleList';

const CoordiContent = () => {
  return (
    <section className="coordi-content">
      <SubTab category={'coordi'} />
      <CoordiThumbList />
      <ButtonWrap>
        <ArrowButton text={'전체 보기'} />
      </ButtonWrap>
      <SubVisualSlider category={'coordi'} />
      <SubTab category={'coordi2'} />
      <CoordiStyleList category={'sportAndOutdoor'} />
      <SubVisualSlider category={'coordi'} />
      <SubTab category={'coordi2'} />
      <CoordiStyleList category={'formalAndUrban'} />
      <SubVisualSlider category={'coordi'} />
    </section>
  );
};

export default CoordiContent;