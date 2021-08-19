// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from 'next/image';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import CardList from 'components/CardList';
import withBreakpoints from 'hocs/withBreakpoints';
import {withTranslation} from 'intl';
import style from './style.module.scss';

const serviceCards = [
  {
    label: '01. Business Analysis',
    logoSrc: '/assets/images/analysis.png',
    text:
      'Together with you we discuss and formulate your business idea, offer optimal ways for its realization, make up a list of basic requirements, taking into account your business processes and user needs.',
    color: 'yellow',
  },
  {
    label: '02. Engineering And Design',
    logoSrc: '/assets/images/engineering.png',
    text:
      'We design the interface of all elements of the future application, create a practical design or adapt your corporate style to the platform guidelines. We create custom scripts and design different states for each of them.',
    color: 'green',
  },
  {
    label: '03. Development',
    logoSrc: '/assets/images/development.png',
    text:
      'We design a modular application architecture that will be easy and convenient to support and expand if necessary in the future. We write clean, clear and stable code step by step, we involve the client at every step to control the process and receive intermediate assemblies for review.',
    color: 'blue',
  },
  {
    label: '04. Testing',
    logoSrc: '/assets/images/testing.png',
    text:
      'We thoroughly test the application for the specification compliance and we manually run functional and unit testing.',
    color: 'coral',
  },
  {
    label: '05. Publication',
    logoSrc: '/assets/images/publication.png',
    text:
      'When the testing is successfully complete, we transfer the application to App Store and Google Play to publish it taking into account all the guidelines and store requirements.',
    color: 'purple',
  },
  {
    label: '06. Support',
    logoSrc: '/assets/images/support.png',
    text: 'We monitor your app’s stable and correct performance on all the devices and OS.',
    color: 'pink',
  },
];

function MobileDevelopment({className, screen, t}) {
  return (
    <section className={cn(style.MobileDevelopment, className)}>
      <Container className={cn(style.container)}>
        <div className={cn(style.innerContainerTop)}>
          <Heading variant="h2" className={cn(style.heading)}>
            {parse(t('homepage:mobileDev.title'))}
          </Heading>
          <div>
            <Heading variant="h3" className={cn(style.subHeading)}>
              {parse(t('homepage:mobileDev.subtitle1'))}
            </Heading>
            <Paragraph className={cn(style.textTop)}>{parse(t('homepage:mobileDev.text1'))}</Paragraph>
          </div>
          <div className={cn(style.image)}>
            <Image src="/assets/images/phone.png" alt="App mobile interface" width={310} height={641} />
          </div>
        </div>
        <div className={cn(style.innerContainer, style.service)}>
          <Heading variant="h3" className={cn(style.subHeading)}>
            Service
          </Heading>
          <CardList hasSwiper={screen.isTablet} columns={2} items={serviceCards} fullWidth navigationDark />
        </div>
        <div className={cn(style.innerContainer)}>
          <Heading variant="h3" className={cn(style.subHeading)}>
            {parse(t('homepage:mobileDev.subtitle2'))}
          </Heading>
          <Paragraph className={cn(style.text)}>{parse(t('homepage:mobileDev.text2'))}</Paragraph>
          <CardList
            columns={3}
            items={t('homepage:mobileDev.developmentCards', {returnObjects: true})}
            className={cn(style.cardList)}
          />
        </div>
      </Container>
    </section>
  );
}

MobileDevelopment.defaultProps = {
  className: '',
};

MobileDevelopment.propTypes = {
  className: PropTypes.string,
  screen: PropTypes.object,
  t: PropTypes.func,
};

export default withTranslation('homepage')(withBreakpoints(MobileDevelopment));
