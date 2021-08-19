// Vendor
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import PrincipleItem from 'components/PrincipleItem';
import style from './style.module.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

function PrincipleList({principles}) {
  return (
    <Swiper
      className={cn(style.swiper)}
      spaceBetween={68}
      slidesPerView="auto"
      navigation
      pagination={{type: 'progressbar'}}
      breakpoints={{
        320: {
          pagination: {
            type: 'bullets',
            clickable: true,
          },
          spaceBetween: 16,
        },
        768: {
          pagination: {
            type: 'progressbar',
          },
          spaceBetween: 28,
        },
        1024: {
          spaceBetween: 32,
        },
      }}>
      {principles.map((item, index) => {
        return (
          <SwiperSlide key={index} className={cn(style.slide)}>
            <PrincipleItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

PrincipleList.defaultProps = {
  className: '',
};

PrincipleList.propTypes = {
  className: PropTypes.string,
  principles: PropTypes.array,
};

export default PrincipleList;
