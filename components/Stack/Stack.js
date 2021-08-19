// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Heading from 'components/Heading/Heading';
import CardList from 'components/CardList';
import style from './style.module.scss';

function Stack({className, item}) {
  return (
    <div className={cn(style.Stack, className)}>
      <Heading variant="h3" className={cn(style.heading)}>
        {item.title}
      </Heading>
      <CardList hasSwiper items={item.items} />
    </div>
  );
}

Stack.defaultProps = {
  className: '',
};

Stack.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};

export default Stack;
