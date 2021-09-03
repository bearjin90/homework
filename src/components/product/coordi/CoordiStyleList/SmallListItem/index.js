import React from 'react';

const SmallListItem = ({ data }) => {
  return (
    <li className="coordi-style-list__item coordi-style-list__item--small">
      {
        data.map((elm, idx) => {
          return (
            <div key={`small-item_${elm.img}_${idx}`} className="coordi-style-list__small-item">
              <div className="coordi-style-list__img">
                <img src={require(`../../../../../assets/images/coordi/style/${elm.img}`).default} alt={`코디 스타일 이미지_${idx}`} />
              </div>
              <p className="coordi-style-list__title">{elm.title}</p>
            </div>
          )
        })
      }
    </li >
  );
};

export default SmallListItem;