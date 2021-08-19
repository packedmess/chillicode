// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Element} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading';
import CardList from 'components/CardList';
import withBreakpoints from 'hocs/withBreakpoints';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Statistic({className, screen, t}) {
  const cards = t('homepage:statistic.cards', {returnObjects: true});

  return (
    <section className={cn(style.Statistic, className)}>
      <Element id="About">
        <Container className={cn(style.container)}>
          <Heading variant="h2" className={cn(style.heading)}>
            <span className={style.withIcon}>{parse(t('homepage:statistic.title1'))}</span>
            <span>{parse(t('homepage:statistic.title2'))}</span>
          </Heading>
          <CardList
            hasSwiper={screen.isTablet}
            columns={3}
            statisticCards
            items={cards}
            className={cn(style.cardList)}
            navigationDark
          />
        </Container>
      </Element>
    </section>
  );
}

Statistic.defaultProps = {
  className: '',
};

Statistic.propTypes = {
  className: PropTypes.string,
  screen: PropTypes.object,
  t: PropTypes.func,
};

export default withTranslation('homepage')(withBreakpoints(Statistic));
