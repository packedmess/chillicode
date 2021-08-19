// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function Tab({className, isActive, children, ...props}) {
  const classes = cn({
    [style.Tab]: true,
    [style.isActive]: isActive,
    [className]: className,
  });

  return (
    <li className={classes} {...props}>
      <button type="button">{children}</button>
    </li>
  );
}

Tab.defaultProps = {
  className: '',
};

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

export default Tab;
