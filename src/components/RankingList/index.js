import React from 'react';
import rankingListData from '../../_data/rankingListData';

/**
 * 가격 쉼표 추가
 * @param {string} price 가격
 */
function plusCommasPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const RankingList = ({ start, end }) => {
  const _listData = rankingListData.slice(start, end);
  const _type = end - start;

  return (
    <ul className="ranking-list" data-type={_type}>
      {
        _listData.map((elm) => {
          return (
            <li key={`${elm.brand}_${elm.name}_${elm.ranking}`} className="ranking-list__item">
              <div className="ranking-list__img">
                <img src={require(`../../assets/images/goods/${elm.img}`).default} alt={`${elm.brand}_${elm.name}`} />
                <span className="ranking-list__ranking">{elm.ranking}</span>
              </div>
              <div className="ranking-list__info">
                <p className="ranking-list__brand">{elm.brand}</p>
                <div className="ranking-list__price-wrap">
                  <p className="ranking-list__price">{plusCommasPrice(elm.price)}원</p>
                  <div className="ranking-list__benefit">
                    {elm.discount > 0 && <p className="ranking-list__discount">{elm.discount}%</p>}
                    {elm.coupon === 'Y' && <p className="ranking-list__coupon">쿠폰</p>}
                  </div>
                </div>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

export default RankingList;