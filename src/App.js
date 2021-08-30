import React from 'react';
import './styles/scss/app.scss';
import Header from './components/Header';
import VisualSlider from './components/VisualSlider';
import ProductContent from './components/ProductContent';

const App = () => {
  return (
    <main id="main" className="main">
      <Header />
      <VisualSlider />
      <ProductContent />
    </main>
  );
};

export default App;