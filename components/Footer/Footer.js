import {Element, animateScroll as scroll} from 'react-scroll';
import cn from 'classnames';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// Internals
import {withTranslation} from 'intl';
import Container from 'components/Container';
import LogoIcon from 'public/assets/icons/logo.svg';
import ArrowIcon from 'public/assets/icons/arrow-top.svg';
import IconButton from 'components/IconButton';
import Social from 'components/Social';
import style from './style.module.scss';

function Footer({t}) {
  const [isFixed, setFixed] = useState(false);
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        let documentPos = document.body.scrollHeight - document.body.offsetHeight;

        if (currentScrollPos >= 800 && currentScrollPos < documentPos - 100) {
          setFixed(true);
        } else {
          setFixed(false);
        }

        if (currentScrollPos >= 1000) {
          setHidden(false);
        } else {
          setHidden(true);
        }
      });
    }
  });

  const classes = cn({
    [style.toTop]: true,
    [style.fixed]: isFixed,
    [style.hidden]: isHidden,
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.Footer}>
      <Element id="Footer">
        <Container className={style.container}>
          <IconButton href="#" label="Chillicode logo" onClick={scrollToTop} className={style.logo}>
            <LogoIcon width={192} height={34} />
          </IconButton>
          <Social className={style.social} />
          <Container className={classes}>
            <IconButton label="Back to top" className={style.toTopButton} onClick={scrollToTop}>
              <ArrowIcon width={13} height={17} />
            </IconButton>
          </Container>

          <div className={style.innerContainer}>
            <span>
              © 2013–{currentYear} {t('homepage:footer.copyright')} CHILLICODE | Designed by{' '}
              <a href="https://wender.studio/" target="_blank" rel="nofollow noreferrer" className={style.link}>
                Wender.Studio
              </a>
            </span>
            <span>
              <a href="tel:+78633091357" className={style.link}>
                +7 (863) 309-13-57
              </a>{' '}
              |{' '}
              <a href="mailto:info@chillicode.ru" className={style.link}>
                info@chillicode.ru
              </a>
            </span>
          </div>
        </Container>
      </Element>
    </footer>
  );
}

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('homepage')(Footer);
