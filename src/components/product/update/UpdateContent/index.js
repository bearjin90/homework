import React from 'react';
import ButtonWrap from '../../../buttons/ButtonWrap';
import RefreshButton from '../../../buttons/RefreshButton';
import UpdateNewsList from '../UpdateNewsList';

const UpdateContent = () => {
  return (
    <section className="update-content">
      <UpdateNewsList />
      <ButtonWrap>
        <RefreshButton text={'새로운  추천'} />
      </ButtonWrap>
    </section>
  );
};

export default UpdateContent;