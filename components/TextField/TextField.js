// Vendor
import PropTypes from 'prop-types';
import {Field} from 'react-final-form';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function TextField({children, type, name, validate, ...props}) {
  const classes = meta =>
    cn({
      [style.input]: true,
      [style.inputError]: meta.error && meta.touched,
    });

  return (
    <>
      <label htmlFor={name} className={style.label} {...props}>
        {children}
      </label>
      <Field name={name} validate={validate}>
        {({input, meta}) => (
          <div className={style.inputContainer}>
            <input {...input} id={name} type={type} placeholder={`(${children})`} className={classes(meta)} />
            {meta.error && meta.touched && (
              <span aria-live="assertive" className={style.error}>
                {meta.error}
              </span>
            )}
          </div>
        )}
      </Field>
    </>
  );
}

TextField.defaultProps = {};

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  validate: PropTypes.func,
};

export default TextField;
