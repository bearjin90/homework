import React from 'react';
import './styles/scss/app.scss';
import Header from './components/Header';
import VisualSlider from './components/VisualSlider';
import MainTab from './components/MainTab';
import SubTab from './components/SubTab';
import SubVisualSlider from './components/SubVisualSlider';

const App = () => {
  return (
    <main id="main" className="main">
      <Header />
      <VisualSlider />
      <MainTab />
      <SubTab category={'ranking'} />
      <SubVisualSlider category={'ranking'} />
    </main>
  );
}

export default App;