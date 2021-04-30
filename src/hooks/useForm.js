import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
    // eslint-disable-next-line
    return () => setIsSubmitting(false);
  }, [errors])

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
