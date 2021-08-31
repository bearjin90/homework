import React from 'react';
import coordiThumbListData from '../../../_data/coordiThumblistData';
import { plusCommasPrice } from '../../../utils/plusCommasPrice';

const CoordiThumbList = () => {
  return (
    <ul className="coordi-thumb-list">
      {
        coordiThumbListData.map((elm, idx) => {
          return (
            <li key={elm.brand + idx} className="coordi-thumb-list__item">
              <div className="coordi-thumb-list__thumb coordi-thumb-list__thumb--big">
                <img src={require(`../../../assets/images/coordi/thumb/b_thumb_${elm.img}`).default} alt={`${elm.brand}_코디_${idx}`} />
              </div>
              <div className="coordi-thumb-list__product">
                <div className="coordi-thumb-list__thumb coordi-thumb-list__thumb--small">
                  <img src={require(`../../../assets/images/coordi/thumb/s_thumb_${elm.img}`).default} alt={`${elm.brand}_코디제품_${idx}`} />
                </div>
                <div className="coordi-thumb-list__info">
                  <p className="coordi-thumb-list__brand">{elm.brand}</p>
                  <p className="coordi-thumb-list__price-wrap">
                    <span className="coordi-thumb-list__price">{plusCommasPrice(elm.price)}원</span>
                    {elm.discount && <span className="coordi-thumb-list__discount">{elm.discount}%</span>}
                  </p>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

export default CoordiThumbList;