// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from 'next/image';
import {scroller} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Intro({t, i18n}) {
  const scrollTo = () => {
    scroller.scrollTo('Contacts', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -90,
    });
  };

  const classes = cn({
    [style.Intro]: true,
    [style.ru]: i18n.language === 'ru',
  });
  return (
    <section className={classes}>
      <Container>
        <Heading variant="h1" className={cn(style.heading)}>
          <span className={cn(style.whitePart)}>
            <span>{parse(t('homepage:intro.title1'))}</span>
            <span>{parse(t('homepage:intro.title2'))}</span>
          </span>
          <span className={cn(style.redPart)}>{parse(t('homepage:intro.title3'))}</span>
        </Heading>
        <div className={cn(style.innerContainer)}>
          <div className={cn(style.image)}>
            <Image src="/assets/images/working.png" alt="Computer, phone" width={366} height={232} />
          </div>
          <Paragraph className={cn(style.text)}>{parse(t('homepage:intro.text'))}</Paragraph>
          <Button color="primary" size="large" className={cn(style.button)} onClick={scrollTo}>
            {parse(t('homepage:intro.button'))}
          </Button>
        </div>
      </Container>
    </section>
  );
}

Intro.defaultProps = {
  className: '',
};

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  t: PropTypes.func,
  i18n: PropTypes.object,
};

export default withTranslation('homepage')(Intro);
