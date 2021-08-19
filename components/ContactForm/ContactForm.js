// Vendor
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Form} from 'react-final-form';
import parse from 'html-react-parser';
// Internals
import CheckBox from 'components/CheckBox';
import TextField from 'components/TextField';
import FileField from 'components/FileField';
import Button from 'components/Button';
import FormSuccess from 'components/FormSuccess';
import {withTranslation} from 'intl';
import {validate} from 'utils/forms';
import style from './style.module.scss';

function ContactForm({t, formId}) {
  const rules = {
    name: {
      required: t('homepage:contacts.required'),
    },
    email: {
      email: t('homepage:contacts.isValidEmail'),
      required: t('homepage:contacts.required'),
    },
    phone: {
      phone: t('homepage:contacts.isValidPhone'),
      required: t('homepage:contacts.required'),
    },
    consent: {
      required: t('homepage:contacts.required'),
    },
  };

  const [name, setName] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = async values => {
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        body: new FormData(document.getElementById(formId)),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName(values.name);
      } else {
        alert('Error sending request. Please try again later.');
      }
    } catch (err) {
      alert('Error sending request. Please try again later.');
    }
  };

  if (isSuccess) {
    return <FormSuccess t={t} name={name} />;
  }

  const formRef = useRef();
  const [isFormReached, setFormReached] = useState(false);
  const [isNameFillStarted, setFormFillStarted] = useState(false);
  const [isPhoneFillStarted, setPhoneFillStarted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', isContactFormReached);
    }

    if (isFormReached) {
      window.ym(process.env.YANDEX_METRIKA, 'reachGoal', 'B24_FORM_6_VIEW');
    }

    if (isNameFillStarted) {
      window.ym(process.env.YANDEX_METRIKA, 'reachGoal', 'B24_FORM_6_START');
    }

    if (isPhoneFillStarted) {
      window.ym(process.env.YANDEX_METRIKA, 'reachGoal', 'B24_FORM_6_LEAD_PHONE');
    }

    return () => window.removeEventListener('scroll', isContactFormReached);
  });

  const isContactFormReached = () => {
    if (formRef.current.getBoundingClientRect().top <= 0) {
      setFormReached(true);
    }
  };

  const isFieldFillStarted = (value, name) => {
    if (value[`${name}`] !== undefined) {
      if (name === 'name') {
        setFormFillStarted(true);
      }

      if (name === 'phone') {
        setPhoneFillStarted(true);
      }
    }
  };

  return (
    <Form
      validate={validate(rules)}
      onSubmit={handleSubmit}
      render={({handleSubmit, submitting, values}) => (
        <form ref={formRef} onSubmit={handleSubmit} className={style.form} id={formId} noValidate>
          <div className={style.group}>
            <span className={style.text}>{parse(t('homepage:contacts.nameText'))}</span>
            <TextField type="text" name="name" onChange={isFieldFillStarted(values, 'name')}>
              {t('homepage:contacts.name')}
            </TextField>
          </div>
          <div className={style.group}>
            <span className={style.text}>{parse(t('homepage:contacts.sphereText'))}</span>
            <TextField type="text" name="sphere">
              {t('homepage:contacts.sphere')}
            </TextField>
          </div>
          <div className={style.group}>
            <span className={style.text}>{parse(t('homepage:contacts.companyText'))}</span>
            <TextField type="text" name="company">
              {t('homepage:contacts.company')}
            </TextField>
          </div>
          <fieldset className={cn(style.group, style.checkBoxGroup)}>
            <legend className={style.legend}>Project</legend>
            <span className={style.text}>{parse(t('homepage:contacts.projectText'))}</span>
            <CheckBox name="project[0]">{t('homepage:contacts.website')}</CheckBox>
            <CheckBox name="project[1]">{t('homepage:contacts.service')}</CheckBox>
            <CheckBox name="project[2]">{t('homepage:contacts.app')}</CheckBox>
          </fieldset>
          <fieldset className={cn(style.group, style.checkBoxGroup)}>
            <legend className={style.legend}>Budget</legend>
            <span className={style.text}>{parse(t('homepage:contacts.budgetText'))}</span>
            <CheckBox name="budget[0]">{t('homepage:contacts.5')}</CheckBox>
            <CheckBox name="budget[1]">{t('homepage:contacts.10')}</CheckBox>
            <CheckBox name="budget[2]">{t('homepage:contacts.50')}</CheckBox>
            <CheckBox name="budget[3]">{t('homepage:contacts.100')}</CheckBox>
          </fieldset>
          <div className={cn(style.group, style.fullWidth, style.commentGroup)}>
            <span className={style.text}>{parse(t('homepage:contacts.commentText'))}</span>
            <TextField type="text" name="comments">
              {t('homepage:contacts.comment')}
            </TextField>
          </div>
          <div className={cn(style.group, style.emailGroup)}>
            <span className={style.text}>{parse(t('homepage:contacts.emailText'))}</span>
            <TextField type="email" name="email">
              {t('homepage:contacts.email')}
            </TextField>
          </div>
          <div className={style.group}>
            <span className={style.text}>{parse(t('homepage:contacts.phoneText'))}</span>
            <TextField type="tel" name="phone" onChange={isFieldFillStarted(values, 'phone')}>
              {t('homepage:contacts.phone')}
            </TextField>
          </div>
          <div className={cn(style.group, style.fullWidth)}>
            <FileField t={t} />
          </div>
          <div className={style.fullWidth}>
            <CheckBox standart name="consent">
              {parse(t('homepage:contacts.consentText'))}
            </CheckBox>
          </div>
          <Button type="submit" disabled={submitting}>
            {t('homepage:contacts.button')}
          </Button>
        </form>
      )}
    />
  );
}

ContactForm.defaultProps = {
  className: '',
  formId: 'contact-form',
};

ContactForm.propTypes = {
  className: PropTypes.string,
  formId: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation('homepage')(ContactForm);
