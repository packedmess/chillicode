// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function Button({children, color, size, href, target, type, disabled, className, ...props}) {
  const classes = cn({
    [style.Button]: true,
    [style[color]]: color,
    [style[size]]: size,
    [className]: className,
  });

  if (href) {
    return (
      <a href={href} target={target} rel="nofollow noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  size: 'large',
  color: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
