import React, { useState } from 'react';
import MainTab from '../../MainTab';
import RankingContent from '../ranking/RankingContent';
import CoordiContent from '../coordi/CoordiContent';
import UpdateContent from '../update/UpdateContent';

const ProductContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onChangeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="product-content">
      <MainTab activeTab={activeTab} onChangeTab={onChangeTab} />
      {activeTab === 0 && <RankingContent />}
      {activeTab === 1 && <CoordiContent />}
      {activeTab === 2 && <UpdateContent />}
    </div>
  );
};

export default ProductContent;