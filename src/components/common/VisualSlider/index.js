import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import visualData from '../../../_data/visualData';

const VisualSlider = () => {
  return (
    <div className="visual-slider" role="slider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
      >
        {visualData.map((elm, idx) => {
          return (
            <SwiperSlide key={elm.title + idx}>
              <a href="#" className="visual-slider__link">
                <img className="visual-slider__img" src={require(`../../../assets/images/banner/${elm.img}`).default} alt={elm.title} />
                <p className="visual-slider__category">{elm.category}</p>
                <div className="visual-slider__info">
                  <p className="visual-slider__title">{elm.title}</p>
                  <p className="visual-slider__txt">{elm.txt}</p>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default VisualSlider;