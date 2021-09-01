import React from 'react';
import updateNewsListData from '../../../../_data/updateNewsData';

const UpdateNewsList = () => {
  return (
    <ul className="update-news-list">
      {
        updateNewsListData.map((elm, idx) => {
          return (
            <li className="update-news-list__item">
              <div className="update-news-list__img">
                <img src={require(`../../../../assets/images/update/news/${elm.img}`).default} alt={`뉴스 이미지_${idx}`} />
              </div>
              <p className="update-news-list__title">{elm.title}</p>
              <div className="update-news-list__info">
                <span className="update-news-list__brand">{elm.brand}</span>
                {
                  elm.comments > 0 &&
                  <span className="update-news-list__comment">{elm.comments}개 댓글</span>
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

export default UpdateNewsList;