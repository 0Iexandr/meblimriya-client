import 'swiper/swiper-bundle.css';
import './ImageSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import f from '../../assets/img/solomia-front-1.jpg';
import s from '../../assets/img/Solomia_front.jpg';
import t from '../../assets/img/Tera.jpg';

const ImageSlider = ({ className, width, height }) => {
  const images = [f, s, t];

  return (
    <div className={className}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1,
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Furniture set ${index + 1}`}
              width={width}
              height={height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
