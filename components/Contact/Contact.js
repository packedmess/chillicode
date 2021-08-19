// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Element} from 'react-scroll';
import parse from 'html-react-parser';
// Internals
import Container from 'components/Container';
import Heading from 'components/Heading';
import ContactForm from 'components/ContactForm';
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Contact({className, t}) {
  return (
    <section className={cn(style.Contact, className)}>
      <Element id="Contacts">
        <Container className={cn(style.container)}>
          <Heading variant="h2" className={cn(style.heading)}>
            {parse(t('homepage:contacts.title'))}
          </Heading>
          <ContactForm />
        </Container>
      </Element>
    </section>
  );
}

Contact.defaultProps = {
  className: '',
};

Contact.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation('homepage')(Contact);
