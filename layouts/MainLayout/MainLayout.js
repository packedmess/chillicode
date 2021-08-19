// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Head from 'next/head';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
// Internals
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import CookieConsent from 'components/CookieConsent';

import style from './style.module.scss';

function MainLayout({children, className}) {
  const [cookies, setCookie] = useCookies(['user']);

  const layoutScrollPosition = useSelector(({ui}) => ui.layoutScrollPosition);

  useEffect(() => {
    window.scrollTo(0, layoutScrollPosition);
  });

  const handleSetCookies = () => {
    setCookie('user', 'user', {path: '/', maxAge: 86400});
  };

  return (
    <div className={cn(style.MainLayout, className)}>
      <Head>
        <title>Chillicode — Создаем сайты, веб-сервисы и мобильные приложения</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Разрабатываем и развиваем сайты, веб-сервисы и мобильные приложения." />
      </Head>
      {!cookies.user && <CookieConsent handleSetCookies={handleSetCookies}></CookieConsent>}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

MainLayout.defaultProps = {
  className: '',
};

MainLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MainLayout;
