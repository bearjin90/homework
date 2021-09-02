import React from 'react';

const ArrowButton = ({ text }) => {
  return (
    <button className="default-btn default-btn--arrow">
      {text}
      <span className="icon-svg icon-svg--arrow"></span>
    </button>
  );
};

export default ArrowButton;