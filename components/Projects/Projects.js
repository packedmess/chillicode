// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Element} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading';
import ProjectList from 'components/ProjectList';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Projects({className, t}) {
  return (
    <section className={cn(style.Projects, className)}>
      <Element id="Cases">
        <Container className={cn(style.container)}>
          <div className={cn(style.innerContainer)}>
            <Heading variant="h2" className={cn(style.heading)}>
              {parse(t('homepage:projects.title'))}
            </Heading>
          </div>
          <ProjectList t={t} />
        </Container>
      </Element>
    </section>
  );
}

Projects.defaultProps = {
  className: '',
};

Projects.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation('homepage')(Projects);
