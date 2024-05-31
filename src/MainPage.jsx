import React, { useState } from 'react';
import { Popup } from './Popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const popStatus = () => {
    showPopup ? setShowPopup(false) : setShowPopup(true);
  };

  const toSub = () => {
    navigate('/subpage');
  };

  return (
    <div id="wrap">
      <h1>Main Page</h1>
      <h3 className="sub-title">팝업</h3>
      <button onClick={popStatus}>팝업</button>
      <Popup show={showPopup} onClose={popStatus} />
      <h3 className="sub-title">스와이퍼</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <h3 className="sub-title">서브페이지 이동</h3>
      <button onClick={toSub}>서브페이지로 이동</button>
    </div>
  );
};
