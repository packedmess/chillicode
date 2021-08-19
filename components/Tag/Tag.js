// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import parse from 'html-react-parser';
// Internals
import style from './style.module.scss';

function Tag({label, color, className}) {
  const classes = cn({
    [style.Tag]: true,
    [style[color]]: color,
    [className]: className,
  });
  return <li className={classes}>{parse(label)}</li>;
}

Tag.defaultProps = {
  className: '',
};

Tag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Tag;
