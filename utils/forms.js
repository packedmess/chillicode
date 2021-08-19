/**
 * Used for FinalForm Record-Level Validation in custom validate() function described below.
 * @see https://final-form.org/docs/react-final-form/examples/record-level-validation
 * @see https://final-form.org/docs/react-final-form/types/FormProps#validate
 */
export const validators = {
  required: ({value}) => Boolean(value && String(value).trim()),
  email: ({value}) => /\S+@\S+\.\S+/.test(value),
  phone: ({value}) => /^\+?\d{0,13}$/.test(value),
};

/**
 * Custom validation function for FinalForm Record-Level Validation.
 * Takes object of rules in the shape of {[fieldName]: message} where message is an error text string.
 * Or in the shape of {[fieldName]: {message: string, ...customParams}} where message is an error text string and
 * customParams are additional params fields for more precise validation settings.
 * @param rules {Object}
 * @return {function(Object): Object}
 */
export const validate = rules => values => {
  const errors = {};

  for (const fieldName in rules) {
    // Rule can be a function that returns object with validator rules
    const rule = typeof rules[fieldName] === 'function' ? rules[fieldName](values) : rules[fieldName];

    for (const validatorName in rule) {
      // Validator function from 'validators' object
      const validator = validators[validatorName];
      // Validator descriptor from 'rules' can be message string or object with 'message' field
      const descriptor = rule[validatorName];
      // Takes error message from 'rules'
      const message = typeof descriptor === 'object' ? descriptor.message : descriptor;
      // Validator function invokes with these params
      const params = {
        params: typeof descriptor === 'object' ? descriptor : {}, // params from descriptor object will be passed here
        value: values[fieldName],
        message,
        values,
      };
      // Verify value by validator if validator found and if it's invalid add to errors object
      if (typeof validator === 'function' && !validator(params)) {
        errors[fieldName] = message;
      }
    }
  }

  return errors;
};
