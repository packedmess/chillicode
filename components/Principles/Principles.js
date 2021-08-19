// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Element} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading/Heading';
import PrincipleList from 'components/PrincipleList';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Principles({className, t}) {
  const principles = t('homepage:process.principles', {returnObjects: true});

  return (
    <section className={cn(style.Principles, className)}>
      <Element id="Process">
        <Container className={cn(style.container)}>
          <Heading variant="h2" className={cn(style.heading)}>
            {parse(t('homepage:process.title'))}
          </Heading>
          <PrincipleList principles={principles} />
        </Container>
      </Element>
    </section>
  );
}

Principles.defaultProps = {
  className: '',
};

Principles.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation('homepage')(Principles);
