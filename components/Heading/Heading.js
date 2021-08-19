// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function Heading({children, variant, gutterBottom, className, ...props}) {
  const classes = cn({
    [style.Heading]: true,
    [style[variant]]: variant,
    [style.gutterBottom]: gutterBottom,
    [className]: className,
  });

  const VariantHeading = variant;

  return (
    <VariantHeading className={classes} {...props}>
      {children}
    </VariantHeading>
  );
}

Heading.defaultProps = {
  variant: 'h1',
  gutterBottom: false,
};

Heading.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  gutterBottom: PropTypes.bool,
  className: PropTypes.string,
};

export default Heading;
