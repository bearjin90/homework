import React from 'react';
import mainTabData from '../../_data/mainTabData';

const MainTab = () => {
  return (
    <div id="mainTab" className="main-tab">
      <ul className="main-tab__list">
        {
          mainTabData.map((elm, idx) => {
            return (
              <li key={elm + idx} className="main-tab__item"><button type="button" className="main-tab__btn">{elm}</button></li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default MainTab;