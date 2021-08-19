// Vendor
import cn from 'classnames';
import PropTypes from 'prop-types';
import {Field} from 'react-final-form';
// Internals
import style from './style.module.scss';

function CheckBox({children, name, standart, validate, ...props}) {
  const classes = cn({
    [style.CheckBox]: true,
    [style.standart]: standart,
  });

  const errorClasses = meta =>
    cn({
      [style.input]: true,
      [style.inputError]: meta.error && meta.touched,
    });

  if (standart) {
    return (
      <label className={classes} {...props}>
        <Field name={name} component="input" type="checkbox" className={style.input} validate={validate}>
          {({input, meta}) => (
            <>
              <input {...input} id={name} type="checkbox" className={errorClasses(meta)} />
              <span className={style.check}></span>
              <span className={style.label}>
                {children}
                {meta.error && meta.touched && (
                  <span aria-live="assertive" className={style.error}>
                    {meta.error}
                  </span>
                )}
              </span>
            </>
          )}
        </Field>
      </label>
    );
  }

  return (
    <label className={classes} {...props}>
      <Field name={name} component="input" type="checkbox" value={children} className={style.input} />
      <span className={style.label}>{children}</span>
    </label>
  );
}

CheckBox.defaultProps = {};

CheckBox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  standart: PropTypes.bool,
  validate: PropTypes.func,
};

export default CheckBox;
