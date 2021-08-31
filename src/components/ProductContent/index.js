import React from 'react';
import MainTab from '../MainTab';
// import RankingContent from '../ranking/RankingContent';
import CoordiContent from '../coordi/CoordiContent';

const ProductContent = () => {
  return (
    <div className="product-content">
      <MainTab />
      {/* <RankingContent /> */}
      <CoordiContent />
    </div>
  );
};

export default ProductContent;