// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import parse from 'html-react-parser';
// Internals
import style from './style.module.scss';

function StatisticCardItem({item}) {
  return (
    <div className={cn(style.StatisticCardItem)}>
      <span className={cn(style.value)}>{parse(item.value)}</span>
      <span className={cn(style.label)}>{parse(item.label)}</span>
    </div>
  );
}

StatisticCardItem.defaultProps = {
  className: '',
};

StatisticCardItem.propTypes = {
  item: PropTypes.object,
};

export default StatisticCardItem;
