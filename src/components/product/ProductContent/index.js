import React from 'react';
import MainTab from '../../MainTab';
// import RankingContent from '../ranking/RankingContent';
// import CoordiContent from '../coordi/CoordiContent';
import UpdateContent from '../update/UpdateContent';

const ProductContent = () => {
  return (
    <div className="product-content">
      <MainTab />
      {/* <RankingContent />
      <CoordiContent /> */}
      <UpdateContent />
    </div>
  );
};

export default ProductContent;