// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function IconButton({children, href, label, target, className, ...props}) {
  const classes = cn({
    [style.IconButton]: true,
    [className]: className,
  });

  if (href) {
    return (
      <a href={href} rel="nofollow noreferrer" target={target} aria-label={label} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" aria-label={label} className={classes} {...props}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {};

IconButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default IconButton;
