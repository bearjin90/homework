import React from 'react';
import updateNewsListData from '../../../../_data/updateNewsData';
import ProductInfo from '../../ProductInfo';

const UpdateNewsList = () => {
  return (
    <ul className="update-news-list">
      {
        updateNewsListData.map((elm, idx) => {
          return (
            <li key={`${elm.img}_${idx}`} className="update-news-list__item">
              <div className="update-news-list__img">
                <img src={require(`../../../../assets/images/update/news/${elm.img}`).default} alt={`뉴스 이미지_${idx}`} />
              </div>
              <ProductInfo title={elm.title} brand={elm.brand} comment={elm.comments} />
            </li>
          )
        })
      }
    </ul>
  );
};

export default UpdateNewsList;