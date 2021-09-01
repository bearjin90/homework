import React from 'react';

const ArrowLinkButton = ({ link, text }) => {
  return (
    <a href={link} className="default-btn default-btn--arrow">{text}</a>
  );
};

export default ArrowLinkButton;