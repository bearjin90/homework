import React from 'react';
import SubTab from '../../SubTab';
import CoordiThumbList from '../CoordiThumbList';

const CoordiContent = () => {
  return (
    <section className="coordi-content">
      <SubTab category={'coordi'} />
      <CoordiThumbList />
    </section>
  );
};

export default CoordiContent;