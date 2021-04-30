import React, { useState } from 'react'
import FormContact from './FormContact'
import FormSuccess from './FormSuccess'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <Link to="/" className="form-icon">dolla</Link>
          <img
            src={require('../../images/savings.svg').default}
            alt="space"
            className="form-img"
          />
        </div>
        {!isSubmitted ? (
          <FormContact submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  )
}

export default Contact
