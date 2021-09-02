import React from 'react';

const RefreshButton = ({ text }) => {
  return (
    <button type="button" className="default-btn default-btn--refresh">
      <span className="icon-svg icon-svg--refresh"></span>
      {text}
    </button>
  );
};

export default RefreshButton;