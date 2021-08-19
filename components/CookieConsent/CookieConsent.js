// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {useState} from 'react';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function CookieConsent({handleSetCookies, t}) {
  const [active, setActive] = useState(false);

  const classes = cn({
    [style.CookieConsent]: true,
    [style.active]: active,
  });

  return (
    <Container role="dialog" aria-label="Cookie consent" className={classes}>
      <div className={style.consent}>
        <span className={cn(style.text)}>
          {parse(t('common:cookies.textBefore'))}
          <button className={cn(style.button)} onClick={handleSetCookies}>
            {parse(t('common:cookies.accept'))}
          </button>
          {parse(t('common:cookies.textAfter'))}
          <button className={cn(style.button)} onClick={() => setActive(true)}>
            {parse(t('common:cookies.decline'))}
          </button>
          .
        </span>
      </div>
    </Container>
  );
}

CookieConsent.defaultProps = {
  className: '',
};

CookieConsent.propTypes = {
  className: PropTypes.string,
  handleSetCookies: PropTypes.func,
  t: PropTypes.func,
};

export default withTranslation('common')(CookieConsent);
