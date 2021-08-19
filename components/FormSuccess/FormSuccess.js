// Vendor
import PropTypes from 'prop-types';
import Image from 'next/image';
import parse from 'html-react-parser';
// Internals
import Heading from 'components/Heading';
import style from './style.module.scss';

function FormSuccess({t, name}) {
  return (
    <div className={style.FormSuccess}>
      <div className={style.image}>
        <Image src="/assets/icons/chillik_4.svg" alt="Chillicode icon" width={121} height={121} />
      </div>
      <Heading variant="h2" className={style.heading}>
        {parse(t('homepage:contacts.successThank'))}
        <br />
        {name}
      </Heading>
      <p className={style.text}>{parse(t('homepage:contacts.successText'))}</p>
    </div>
  );
}

FormSuccess.defaultProps = {};

FormSuccess.propTypes = {
  name: PropTypes.string,
  t: PropTypes.func,
};

export default FormSuccess;
