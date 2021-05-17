import * as Yup from 'yup'

// Encode for Netlify
function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

// Schema for validation
export const Schema = Yup.object().shape({
  about: Yup.string().required('One of the option is required'),
  name: Yup.string()
    .trim()
    .min(3, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().trim().required('Required'),
})

export function submitForm(values) {
  return new Promise((resolve, reject) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        reject(new Error('failed'))
      })
  })
}

export function trimmedFormValues(values) {
  return Object.entries(values).reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: value.trim(),
    }),
    {}
  )
}
