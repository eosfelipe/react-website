import React from 'react'

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">We have received your request!</div>
      <img
        src={require('../../images/done.svg').default}
        alt="success"
        className="form-img-2"
      />
    </div>
  )
}

export default FormSuccess
