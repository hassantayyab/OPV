import { Field, ErrorMessage } from 'formik'
import styles from './form-input.module.scss'

const FormInput = ({
  name,
  id = name,
  type = 'text',
  className,
  label,
  ...rest
}) => (
  <>
    {/* <label htmlFor={`${id}-label`}> */}
    <label>
      {label}
      <Field
        id={`${id}-label`}
        type={type}
        name={name}
        aria-labelledby={`${id}-label`}
        {...rest}
      />
    </label>
    <div className={styles.error}>
      <ErrorMessage name={name} />
    </div>
  </>
)

export default FormInput
