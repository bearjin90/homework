import React from 'react';

const RefreshButton = ({ text }) => {
  return (
    <button type="button" className="default-btn default-btn--refresh">
      <span className="default-btn__icon">
        <img src={require(`../../../assets/images/ico/ico_refresh.png`).default} alt={`새로고침 아이콘`} />
      </span>
      {text}
    </button>
  );
};

export default RefreshButton;