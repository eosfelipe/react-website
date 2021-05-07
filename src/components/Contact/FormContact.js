import React from 'react'
import useForm from '../../hooks/useForm'
import validate from './validateInfo'

import './FormContact.css'

const FormContact = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>
          Hello there! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="form-input"
            placeholder="Enter your subject"
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Enter your message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default FormContact
