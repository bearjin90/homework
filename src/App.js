import React from 'react';
import './styles/scss/app.scss';
import Header from './components/Header';
import VisualSlider from './components/VisualSlider';
import MainTab from './components/MainTab';
import SubTab from './components/SubTab';

const App = () => {
  return (
    <main id="main" className="main">
      <Header />
      <VisualSlider />
      <MainTab />
      <SubTab category={'ranking'} />
    </main>
  );
}

export default App;