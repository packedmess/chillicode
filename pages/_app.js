// Vendor
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import NextApp from 'next/app';
// Internals
import {useStore} from 'store';
import {CookiesProvider} from 'react-cookie';
import {appWithTranslation} from 'intl';
// Styles
import 'styles/vendor/normalize.scss';
import 'styles/vendor/reset.scss';
import 'styles/vendor/swiper.scss';
import 'styles/vendor/modal.scss';
import 'styles/fonts.scss';
import 'styles/base.scss';

const App = ({Component, pageProps}) => {
  // Initialize Redux from page
  const store = useStore(pageProps.reduxStore);

  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
};

App.getInitialProps = async appContext => {
  return {...(await NextApp.getInitialProps(appContext))};
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(App);
