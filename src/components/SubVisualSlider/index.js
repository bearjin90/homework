import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import subVisualData from '../../_data/subVisualData';
import ProductInfo from '../product/ProductInfo';

const SubVisualSlider = ({ category }) => {
  return (
    <div className="sub-visual-slider" role="slider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
      >
        {subVisualData[category].map((elm, idx) => {
          return (
            <SwiperSlide key={elm.title + idx} data-type={elm.type}>
              <a href="#" className="sub-visual-slider__link">
                <img className="sub-visual-slider__img" src={require(`../../assets/images/banner/${elm.img}`).default} alt={elm.title} />
                <ProductInfo title={elm.title} txt={elm.txt} brand={elm.brand} comment={elm.comment} date={elm.date} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SubVisualSlider;