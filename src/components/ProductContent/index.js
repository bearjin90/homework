import React from 'react';
import MainTab from '../MainTab';
import SubTab from '../SubTab';
import SubVisualSlider from '../SubVisualSlider';

const ProductContent = () => {
  return (
    <div className="product-content">
      <MainTab />
      <SubTab category={'ranking'} />
      <SubVisualSlider category={'ranking'} />
    </div>
  );
};

export default ProductContent;