// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function Container({children, className, ...props}) {
  const classes = cn({
    [style.Container]: true,
    [className]: className,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
