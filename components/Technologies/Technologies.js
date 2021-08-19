// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Stack from 'components/Stack/Stack';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Technologies({className, t}) {
  return (
    <section className={cn(style.Technologies, className)}>
      <Container className={cn(style.container)}>
        <div className={cn(style.innerContainer)}>
          <Heading variant="h2" className={cn(style.heading)}>
            {parse(t('homepage:technologies.title1'))}
            <br />
            {parse(t('homepage:technologies.title2'))}
          </Heading>
          <div className={cn(style.text)}>
            <Paragraph>{parse(t('homepage:technologies.text1'))}</Paragraph>
            <Paragraph>{parse(t('homepage:technologies.text2'))}</Paragraph>
          </div>
        </div>
        {t('homepage:technologies.stack', {returnObjects: true}).map((item, index) => {
          return <Stack key={index} item={item} />;
        })}
      </Container>
    </section>
  );
}

Technologies.defaultProps = {
  className: '',
};

Technologies.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation(['homepage'])(Technologies);
