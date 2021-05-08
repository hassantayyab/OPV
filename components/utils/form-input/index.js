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
    <Field
      type={type}
      name={name}
      placeholder={label}
      aria-labelledby={`${name}-label`}
      {...rest}
    />
    <div className={styles.error}>
      <ErrorMessage name={name} />
    </div>
  </>
)

export default FormInput
