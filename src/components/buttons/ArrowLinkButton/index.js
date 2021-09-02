import React from 'react';

const ArrowLinkButton = ({ link, text }) => {
  return (
    <a href={link} className="default-btn default-btn--arrow">
      {text}
      <span className="icon-svg icon-svg--arrow"></span>
    </a>
  );
};

export default ArrowLinkButton;