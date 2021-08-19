// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Link as LinkTo} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import style from './style.module.scss';

function NavLink({color, item, handleHideModal}) {
  const classes = cn({
    [style.Link]: true,
    [style[color]]: color,
  });

  return (
    <LinkTo
      href={`#${item.link}`}
      activeClass={style.active}
      to={item.link}
      spy={true}
      smooth={true}
      duration={1000}
      offset={-90}
      className={classes}
      onClick={handleHideModal}>
      {parse(item.label)}
    </LinkTo>
  );
}

NavLink.defaultProps = {
  color: 'primary',
};

NavLink.propTypes = {
  item: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary']),
  handleHideModal: PropTypes.func,
};

export default NavLink;
