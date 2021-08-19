// Vendor
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {animateScroll as scroll, scroller} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import TabList from 'components/TabList';
import IconButton from 'components/IconButton';
import Navigation from 'components/Navigation';
import Button from 'components/Button';
import Modal from 'components/Modal';
import withBreakpoints from 'hocs/withBreakpoints';
import {withTranslation} from 'intl';
import LogoIcon from 'public/assets/icons/logo.svg';
import style from './style.module.scss';

function Header({screen, t, i18n}) {
  const [headerTransparent, setHeaderTransparent] = useState(true);

  const scrollTo = to => {
    scroller.scrollTo(to, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -90,
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 0) {
          setHeaderTransparent(false);
        } else {
          setHeaderTransparent(true);
        }
      });
    }
  }, []);

  const classes = cn({
    [style.Header]: true,
    [style.headerTransparent]: headerTransparent,
  });

  const [menuShown, setMenuShown] = useState(false);

  const handleShowMenu = () => {
    setMenuShown(true);
  };

  const handleHideMenu = () => {
    setMenuShown(false);
  };

  const handleLocaleChange = locale => {
    i18n.changeLanguage(locale);
    document.documentElement.setAttribute('lang', locale);
  };

  const scrollAndHideMenu = to => {
    scrollTo(to);
    handleHideMenu();
  };

  let header;
  const tabList = <TabList activeLocale={i18n.language} onChange={handleLocaleChange} className={cn(style.tabList)} />;
  const navigation = <Navigation handleHideModal={handleHideMenu} t={t} />;

  if (screen.isPhone) {
    header = (
      <>
        <IconButton label="Open menu" onClick={handleShowMenu} className={cn(style.navButton)} />
        <Modal isModalShown={menuShown} handleHideModal={handleHideMenu}>
          <div className={style.navContainer}>
            {tabList}
            {navigation}
            <Button onClick={() => scrollAndHideMenu('Contacts')} color="primary" className={cn(style.button)}>
              {parse(t('common:buttons.getInTouch'))}
            </Button>
          </div>
        </Modal>
      </>
    );
  } else if (screen.isTablet) {
    header = (
      <>
        {tabList}
        <IconButton label="Open menu" onClick={handleShowMenu} className={cn(style.navButton)} />
        <Modal isModalShown={menuShown} handleHideModal={handleHideMenu}>
          <div className={style.navContainer}>
            {navigation}
            <Button onClick={() => scrollAndHideMenu('Contacts')} color="primary" className={cn(style.button)}>
              {parse(t('common:buttons.getInTouch'))}
            </Button>
          </div>
        </Modal>
      </>
    );
  } else {
    header = (
      <>
        {tabList}
        {navigation}
        <Button color="secondary" size="small" className={cn(style.button)} onClick={() => scrollTo('Contacts')}>
          {parse(t('common:buttons.getInTouch'))}
        </Button>
      </>
    );
  }

  return (
    <header className={classes}>
      <Container className={cn(style.container)}>
        <IconButton href="#" onClick={scrollToTop} label="Chillicode logo" className={cn(style.iconButton)}>
          <LogoIcon width={192} height={34} />
        </IconButton>
        {screen.isClient && header}
      </Container>
    </header>
  );
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
  screen: PropTypes.object,
  i18n: PropTypes.object,
  t: PropTypes.func,
};

export default withTranslation('common')(withBreakpoints(Header));
