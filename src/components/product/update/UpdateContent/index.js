import React from 'react';
import SubTab from '../../../SubTab';
import SubVisualSlider from '../../../SubVisualSlider';
import ButtonWrap from '../../../buttons/ButtonWrap';
import RefreshButton from '../../../buttons/RefreshButton';
import UpdateNewsList from '../UpdateNewsList';
import UpdateTitle from '../UpdateTitle';
import UpdateProductContent from '../UpdateProductCotent';

const UpdateContent = () => {
  return (
    <section className="update-content">
      <UpdateNewsList />
      <ButtonWrap>
        <RefreshButton text={'새로운  추천'} />
      </ButtonWrap>
      <UpdateTitle />
      <SubTab category={'update'} />
      <UpdateProductContent category={'product1'} />
      <UpdateProductContent category={'product2'} />
      <SubVisualSlider category={'ranking'} />
      <UpdateProductContent category={'product3'} />
    </section>
  );
};

export default UpdateContent;