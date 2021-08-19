// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {useDispatch} from 'react-redux';
// Internals
import Tab from 'components/Tab/Tab';
import {saveLayoutScrollPosition, setLanguage} from 'store/modules/ui';
import style from './style.module.scss';

const locales = ['en', 'ru'];

function TabList({className, activeLocale, onChange}) {
  const dispatch = useDispatch();

  const handleLocaleChange = locale => {
    dispatch(saveLayoutScrollPosition(window.pageYOffset));
    dispatch(setLanguage(locale));
    onChange(locale);
  };

  return (
    <ul className={cn(style.TabList, className)}>
      {locales.map((locale, index) => {
        return (
          <Tab key={index} isActive={activeLocale === locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </Tab>
        );
      })}
    </ul>
  );
}

TabList.defaultProps = {
  className: '',
  onChange: () => null,
};

TabList.propTypes = {
  className: PropTypes.string,
  activeLocale: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TabList;
