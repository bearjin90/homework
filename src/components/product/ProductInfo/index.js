import React from 'react';

const ProductInfo = ({ title, txt, brand, comment, date, time, showCase }) => {
  return (
    <div className="product-info">
      {title && <p className="product-info__title">{title}</p>}
      {txt && <p className="product-info__txt">{txt}</p>}
      <div className="product-info__detail">
        {brand && <span className="product-info__brand">{brand}</span>}
        {time && <span className="product-info__time">{time}분전</span>}
        {comment > 0 && <span className="product-info__comment">{comment}개 댓글</span>}
        {
          date &&
          <div className="product-info__date">
            <span className="product-info__date-start">{date.start}</span>
            <span className="product-info__date-end">- {date.end}</span>
          </div>
        }
        {showCase === 'Y' && <span className="product-info__show-case">쇼케이스 진행중</span>}
      </div>
    </div>
  );
};

export default ProductInfo;