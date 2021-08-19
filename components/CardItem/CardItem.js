// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from 'next/image';
import parse from 'html-react-parser';
// Internals
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import style from './style.module.scss';

function CardItem({className, item, variant, scale}) {
  const classes = cn({
    [style.CardItem]: true,
    [style[item.color]]: item.color,
    [style[variant]]: variant,
    [style.scale]: scale,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Heading variant="h4" className={cn(style.heading)}>
        {parse(item.label)}
      </Heading>
      <div className={cn(style.text)}>
        <Paragraph>{parse(item.text)}</Paragraph>
      </div>
      <div className={cn(style.image)}>
        <Image
          src={item.logoSrc}
          alt="Logo"
          layout="fill"
          objectPosition="top right"
          objectFit="contain"
          loading="eager"
        />
      </div>
    </div>
  );
}

CardItem.defaultProps = {
  className: '',
};

CardItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  variant: PropTypes.string,
  scale: PropTypes.bool,
};

export default CardItem;
