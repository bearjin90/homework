import React from 'react';
import mainTabData from '../../_data/mainTabData';

const MainTab = () => {
  return (
    <div id="mainTab" className="main-tab">
      {
        mainTabData.map((elm, idx) => {
          return (
            <button key={elm + idx} type="button" className="main-tab__btn">{elm}</button>
          );
        })
      }
    </div>
  );
};

export default MainTab;