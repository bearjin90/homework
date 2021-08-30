import React from 'react';
import './styles/scss/app.scss';
import Header from './components/Header';
import VisualSlider from './components/VisualSlider';

const App = () => {
  return (
    <main id="main" className="main">
      <Header />
      <VisualSlider />
    </main>
  );
}

export default App;