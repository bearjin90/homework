import React, { useCallback } from 'react';
import coordiStyleData from '../../../_data/coordiStyleData';
import SmallListItem from './SmallListItem';

const CoordiStyleList = ({ category }) => {
  const makeStyleItem = useCallback(() => {
    const list = coordiStyleData[category].data.map((elm, idx) => {
      return (
        <li key={`${elm.img}_${idx}`} className="coordi-style-list__item">
          <div className="coordi-style-list__img">
            <img src={require(`../../../assets/images/coordi/style/${elm.img}`).default} alt={`코디 스타일 이미지_${idx}`} />
          </div>
          {
            elm.play === 'Y' &&
            <span className="coordi-style-list__play-icon">
              <img src={require('../../../assets/images/ico/ico_video_play.png').default} alt="비디오 플레이" />
            </span>
          }
        </li>
      )
    })
    coordiStyleData[category].smallItem === 'Y' && list.splice(5, 0, <SmallListItem key={`${category}_small-list`} category={category} />);
    return list;
  }, []);

  return (
    <ul className="coordi-style-list">
      {makeStyleItem()}
    </ul>
  );
};

export default CoordiStyleList;