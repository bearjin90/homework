import React from 'react';
import mainTabData from '../../_data/mainTabData';

const MainTab = ({ activeTab, onChangeTab }) => {
  return (
    <div id="mainTab" className="main-tab">
      {
        mainTabData.map((elm, idx) => {
          return (
            <button key={elm + idx} type="button" className={`main-tab__btn ${activeTab === idx ? 'main-tab__btn--active' : ''}`} onClick={() => { onChangeTab(idx); }}>{elm}</button>
          );
        })
      }
    </div>
  );
};

export default MainTab;