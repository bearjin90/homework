import React from 'react';
import './styles/scss/app.scss';
import Header from './components/common/Header';
import VisualSlider from './components/common/VisualSlider';
import ProductContent from './components/product/ProductContent';
import ScrollTopBtn from './components/common/ScrollTopBtn';

const App = () => {
  return (
    <main id="main" className="main">
      <Header />
      <VisualSlider />
      <ProductContent />
      <ScrollTopBtn />
    </main>
  );
};

export default App;