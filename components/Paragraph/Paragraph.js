// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function Paragraph({children, gutterBottom, ...props}) {
  const classes = cn({
    [style.Paragraph]: true,
    [style.gutterBottom]: gutterBottom,
  });

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  gutterBottom: false,
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  gutterBottom: PropTypes.bool,
};

export default Paragraph;
