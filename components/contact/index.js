import { Form, Formik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import Container from '../container'
import FormInput from '../utils/form-input'
import styles from './contact.module.scss'
import { Schema, submitForm, trimmedFormValues } from '../utils/form-utils'
import { staggerLines } from '../animations'
import { useReady } from '../../context'

const Contact = () => {
  const options = [
    {
      label: 'Investment',
      value: 'investment',
    },
    {
      label: 'Partnerships',
      value: 'partnerships',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ]

  const [submit, setSubmit] = useState({
    sent: false,
    error: false,
    message: '',
  })

  const [selected, setSelected] = useState('other')
  const { isReady } = useReady()

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    try {
      await submitForm(
        trimmedFormValues({ ...values }),
        setSubmitting,
        resetForm
      )
      setSubmit({
        sent: true,
        error: false,
        message: 'Thank you for getting in touch!',
      })
      resetForm()
      setSelected('other')
    } catch (error) {
      setSubmit({
        sent: true,
        error: true,
        message: 'Something went wrong! Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const headingRef = useRef()

  useEffect(() => {
    if (isReady) {
      staggerLines(headingRef.current)
    }
  }, [isReady])

  return (
    <div className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <h4 className="aLine">
            <div ref={headingRef}>In good company.</div>
          </h4>

          <div className={styles.row}>
            <div className={styles.leftSec}>
              <Formik
                initialValues={{
                  about: selected,
                  name: '',
                  email: '',
                  message: '',
                }}
                validationSchema={Schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handleSubmit(values, setSubmitting, resetForm)
                }}
              >
                {({ isSubmitting }) => (
                  <Form
                    method="post"
                    name="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className={styles.selection}
                    >
                      <span>I'm enquiring about</span>
                      {options.map((e, i) => (
                        <div
                          role="button"
                          key={i}
                          tabIndex="0"
                          className={`${styles.input} ${
                            selected === e.value ? styles.active : ''
                          }`}
                          onClick={() => setSelected(e.value)}
                          onKeyPress={() => setSelected(e.value)}
                        >
                          <FormInput
                            id={e.value}
                            label={e.label}
                            name="about"
                            type="radio"
                            value={e.value}
                          />
                        </div>
                      ))}
                    </div>

                    <div className={styles.firstRow}>
                      <div className={styles.input}>
                        <FormInput
                          name="email"
                          label="Email Address"
                          type="email"
                        />
                      </div>
                      <div className={styles.input}>
                        <FormInput name="name" label="Name" />
                      </div>
                    </div>

                    <div className={styles.secRow}>
                      <div className={styles.input}>
                        <FormInput
                          name="message"
                          label="Message"
                          component="textarea"
                          rows="6"
                        />
                      </div>
                    </div>

                    <section>
                      <button type="submit" disabled={isSubmitting}>
                        Send
                      </button>
                      {submit.sent && submit.error && (
                        <small className={styles.error}>{submit.message}</small>
                      )}
                      {submit.sent && !submit.error && (
                        <small className={styles.success}>
                          {submit.message}
                        </small>
                      )}
                    </section>
                  </Form>
                )}
              </Formik>
            </div>

            <aside className={styles.rightSec}>
              <span>Location</span>
              <div className={styles.address}>
                <div>21 Heathfield Gardens,</div> <div>Wandsworth, London,</div>{' '}
                <div>SW4 7fj</div>
              </div>
              <span>Find us on</span>
              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/linkedin.svg" alt="linkedin social link" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact as ContactSection }
