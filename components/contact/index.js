import { Form, Formik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import Container from '../container'
import FormInput from '../utils/form-input'
import styles from './contact.module.scss'
import { Schema, submitForm } from '../utils/form-utils'
import { slideRight, slideUp } from '../animations'

const Contact = () => {
  const [submit, setSubmit] = useState({
    sent: false,
    error: false,
    message: '',
  })

  const [selected, setSelected] = useState('other')

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    try {
      await submitForm(values, setSubmitting, resetForm)
      resetForm()
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
  const sideSectionRef = useRef()

  useEffect(() => {
    slideUp(headingRef.current)
    slideRight(sideSectionRef.current)
  }, [])

  return (
    <div className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <h4 ref={headingRef}>In good company.</h4>

          <div className={styles.row}>
            <div className={styles.leftSec}>
              <Formik
                initialValues={{
                  about: 'other',
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
                    <div className={styles.selection}>
                      <span>I'm enquiring about</span>
                      <div
                        role="button"
                        tabIndex="0"
                        className={`${styles.input} ${
                          selected === 'investment' ? styles.active : ''
                        }`}
                        onClick={() => setSelected('investment')}
                        onKeyPress={() => setSelected('investment')}
                      >
                        <FormInput
                          label="Investment"
                          name="investment"
                          type="radio"
                          value="investment"
                        />
                      </div>
                      <div
                        role="button"
                        tabIndex="-1"
                        className={`${styles.input} ${
                          selected === 'partnerships' ? styles.active : ''
                        }`}
                        onClick={() => setSelected('partnerships')}
                        onKeyPress={() => setSelected('partnerships')}
                      >
                        <FormInput
                          label="Partnerships"
                          name="partnerships"
                          type="radio"
                          value="partnerships"
                        />
                      </div>
                      <div
                        role="button"
                        tabIndex="-2"
                        className={`${styles.input} ${
                          selected === 'other' ? styles.active : ''
                        }`}
                        onClick={() => setSelected('other')}
                        onKeyPress={() => setSelected('other')}
                      >
                        <FormInput
                          label="Other"
                          name="other"
                          type="radio"
                          value="other"
                        />
                      </div>
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

                    {/* TODO: Needs to be properly set */}
                    {submit.sent && (
                      <small error={submit.error}>{submit.message}</small>
                    )}

                    <button type="submit" disabled={isSubmitting}>
                      Send
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            <aside className={styles.rightSec} ref={sideSectionRef}>
              <span>Location</span>
              <div className={styles.address}>
                <div>21 Heathfield Gardens,</div> <div>Wandsworth, London,</div>{' '}
                <div>SW4 7fj</div>
              </div>
              <span>Find us at</span>
              <div className={styles.socials}>
                <img src="/twitter-filled.svg" alt="twitter social link" />
                <img src="/linkedin.svg" alt="linkedin social link" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact as ContactSection }
