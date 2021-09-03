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
      <SubTab category={'update'} activeTab={0} />
      <UpdateProductContent category={'product1'} />
      <UpdateProductContent category={'product2'} />
      <UpdateProductContent category={'product3'} />
      <SubVisualSlider category={'ranking'} />
      <UpdateProductContent category={'product4'} />
      <UpdateProductContent category={'product5'} />
      <UpdateProductContent category={'product6'} />
      <UpdateProductContent category={'product7'} />
      <UpdateProductContent category={'product8'} />
      <SubTab category={'update'} activeTab={1} />
      <UpdateProductContent category={'product4'} />
      <UpdateProductContent category={'product5'} />
      <UpdateProductContent category={'product6'} />
      <UpdateProductContent category={'product7'} />
      <UpdateProductContent category={'product8'} />
    </section>
  );
};

export default UpdateContent;