import { Field, ErrorMessage } from 'formik'
import styles from './form-input.module.scss'

const FormInput = ({
  name,
  type = 'text',
  className,
  label = name,
  ...rest
}) => (
  <>
    <label htmlFor={name} id={`${name}-label`}>
      {label}
    </label>
    <Field
      type={type}
      name={name}
      aria-labelledby={`${name}-label`}
      {...rest}
    />
    <div className={styles.error}>
      <ErrorMessage name={name} />
    </div>
  </>
)

export default FormInput
