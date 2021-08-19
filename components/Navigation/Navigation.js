// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import NavLink from 'components/NavLink';
import style from './style.module.scss';

function Navigation({className, handleHideModal, t}) {
  return (
    <nav className={cn(style.Navigation, className)}>
      <ul className={cn(style.navList)}>
        {t('common:nav', {returnObjects: true}).map((item, index) => {
          return (
            <li key={index} className={cn(style.navItem)}>
              <NavLink handleHideModal={handleHideModal} item={item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  className: '',
};

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  handleHideModal: PropTypes.func,
};

export default Navigation;
