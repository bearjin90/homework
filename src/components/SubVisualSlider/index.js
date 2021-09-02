import React from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import subVisualData from '../../_data/subVisualData';

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
              <img className="sub-visual-slider__img" src={require(`../../assets/images/banner/${elm.img}`).default} alt={elm.title} />
              <div className="sub-visual-slider__info">
                <p className="sub-visual-slider__title">{elm.title}</p>
                {elm.txt && <p className="sub-visual-slider__txt">{elm.txt}</p>}
                {elm.comment &&
                  <div className="sub-visual-slider__comment">
                    <p className="sub-visual-slider__comment-tit">{elm.comment.name}</p>
                    <p className="sub-visual-slider__comment-cnt">{elm.comment.cnt}개 댓글</p>
                  </div>
                }
                {elm.date &&
                  <div className="sub-visual-slider__date">
                    <p className="sub-visual-slider__date-start">{elm.date.start}</p>
                    <p className="sub-visual-slider__date-end">- {elm.date.end}</p>
                  </div>
                }
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SubVisualSlider;