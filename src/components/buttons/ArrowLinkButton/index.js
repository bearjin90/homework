import React from 'react';

const ArrowLinkButton = ({ link, text }) => {
  return (
    <a href={link} className="link-btn link-btn--arrow">{text}</a>
  );
};

export default ArrowLinkButton;