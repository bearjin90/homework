import React, { useRef, useCallback } from 'react';
import updateProductContentData from '../../../../_data/updateProductContentData';
import ProductInfo from '../../ProductInfo';

const UpdateProductContent = ({ category }) => {
  const title = useRef(updateProductContentData[category].title);
  const time = useRef(updateProductContentData[category].time);
  const comments = useRef(updateProductContentData[category].comments);
  const showCase = useRef(updateProductContentData[category].showCase);
  const dataMax = useRef(0);

  const makeList = useCallback(() => {
    let _newData = [...updateProductContentData[category].data];
    const _dataLength = _newData.length;

    dataMax.current = _dataLength;
    _dataLength > 7 ? _newData = _newData.slice(1, 8) : _newData;

    const lists = _newData.map((elm, idx) => {
      return (
        <li key={`${elm.img}_${idx}`} className="update-product-content__item">
          <img src={require(`../../../../assets/images/update/product/${elm.img}`).default} alt={`상품 이미지_${idx}`} />
        </li>
      )
    });
    return lists;
  }, []);

  return (
    <div className="update-product-content">
      <div className="update-product-content__top">
        <ul className="update-product-content__list">
          {makeList()}
        </ul>
        {
          dataMax.current > 7 &&
          <div className="update-product-content__rest-item">
            <p className="update-product-content__rest-num"><span>{dataMax.current}</span> 개 상품</p>
            <button type="button" className="update-product-content__rest-btn">전체 보기</button>
          </div>
        }
      </div>
      <div className="update-product-content__bottom">
        <ProductInfo title={title.current} time={time.current} comment={comments.current} showCase={showCase.current} />
      </div>
    </div>
  );
};

export default UpdateProductContent;