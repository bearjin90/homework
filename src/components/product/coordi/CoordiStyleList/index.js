import React, { useCallback } from 'react';
import coordiStyleData from '../../../../_data/coordiStyleData';
import SmallListItem from './SmallListItem';

const CoordiStyleList = ({ category }) => {
  const makeStyleItem = useCallback(() => {
    const list = coordiStyleData[category].data.map((elm, idx) => {
      return (
        <li key={`${elm.img}_${idx}`} className="coordi-style-list__item">
          <div className="coordi-style-list__img">
            <a href="#" className="coordi-style-list__link">
              <img src={require(`../../../../assets/images/coordi/style/${elm.img}`).default} alt={`코디 스타일 이미지_${idx}`} />
            </a>
          </div>
          {
            elm.play === 'Y' &&
            <span className="coordi-style-list__play-icon icon-svg icon-svg--video-play">
              <span className="blind">비디오 플레이 버튼</span>
            </span>
          }
        </li>
      )
    })
    coordiStyleData[category].subData.length > 0 && list.splice(5, 0, <SmallListItem key={`${category}_small-list`} data={coordiStyleData[category].subData} />);
    return list;
  }, []);

  return (
    <ul className="coordi-style-list">
      {makeStyleItem()}
    </ul>
  );
};

export default CoordiStyleList;