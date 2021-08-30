import React from 'react';
import subTabData from '../../_data/subTabData';

const SubTab = ({ category }) => {
  return (
    <div id="subTab" className="sub-tab">
      {
        subTabData[category].map((elm, idx) => {
          return (
            <button key={elm + idx} type="button" className="sub-tab__btn">{elm}</button>
          );
        })
      }
    </div>
  );
};

export default SubTab;