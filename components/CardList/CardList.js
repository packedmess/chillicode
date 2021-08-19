// Vendor
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import CardItem from 'components/CardItem';
import StatisticCardItem from 'components/StatisticCardItem';
import style from './style.module.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const swiperParams = {
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
};

const swiperPagination = {
  type: 'progressbar',
};

function CardList({columns, items, hasSwiper, statisticCards, fullWidth, navigationDark, className, ...props}) {
  const classes = cn({
    [style.CardList]: true,
    [style[`col${columns}`]]: columns,
    [className]: className,
    [style.swiper]: hasSwiper,
    [style.fullWidth]: fullWidth,
    navigationDark: navigationDark,
  });

  if (hasSwiper) {
    return (
      <Swiper
        className={classes}
        slidesPerView="auto"
        navigation
        pagination={swiperPagination}
        breakpoints={swiperParams}
        {...props}>
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index} className={cn(style.slide)}>
              {statisticCards ? <StatisticCardItem item={item} /> : <CardItem scale item={item} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <ul className={classes} {...props}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            {statisticCards ? <StatisticCardItem item={item} {...props} /> : <CardItem item={item} {...props} />}
          </li>
        );
      })}
    </ul>
  );
}

CardList.defaultProps = {
  className: '',
};

CardList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  columns: PropTypes.number,
  hasSwiper: PropTypes.bool,
  fullWidth: PropTypes.bool,
  navigationDark: PropTypes.bool,
  statisticCards: PropTypes.bool,
};

export default CardList;
