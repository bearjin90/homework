import React, { useCallback } from 'react';
import subTabData from '../../_data/subTabData';

const SubTab = ({ category }) => {
  const onClickTab = useCallback((e) => {
    const target = e.target;
    const targetParent = e.target.parentNode;
    targetParent.querySelector('.sub-tab__btn--active').classList.remove('sub-tab__btn--active');
    target.classList.add('sub-tab__btn--active');
    targetParent.scrollTo({
      left: (target.offsetLeft - 15),
      behavior: "smooth"
    });
  }, []);

  return (
    <div id="subTab" className="sub-tab">
      {
        subTabData[category].map((elm, idx) => {
          return (
            <button key={elm + idx} type="button" data-id={idx} className={`sub-tab__btn ${idx === 0 ? "sub-tab__btn--active" : ''}`} onClick={onClickTab}>{elm}</button>
          );
        })
      }
    </div>
  );
};

export default SubTab;