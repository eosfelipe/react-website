import React, { useEffect, useState } from 'react'
import {
  NewsletterContainer,
  NewsletterWrapper,
  NewsletterRow,
  Title,
  FormWrapper,
  InputGroup,
  BtnWrapper,
  Button
} from './NewsletterElements'

const lightText = false

const Newsletter = () => {
  const [formState, setFormState] = useState({
    email: '',
    tel: '',
    isLoading: false
  })

  const { email, tel, isLoading } = formState

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' && tel === '') {
      alert('Favor de completar campos')
      return false
    }
    setFormState({
      ...formState,
      isLoading: true
    })
    setTimeout(() => {
      setFormState({
        email: '',
        tel: '',
        isLoading: false
      })
    }, 2000)
    console.log('send form OK')
  }

  useEffect(() => {}, [email])

  return (
    <>
      <NewsletterContainer>
        <NewsletterWrapper>
          <NewsletterRow>
            <Title lightText={lightText}>Join our team</Title>
            <FormWrapper id="newsletter">
              <InputGroup>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  name="tel"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={tel}
                />
              </InputGroup>
              <InputGroup>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={email}
                />
              </InputGroup>
              <BtnWrapper>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  <span>{isLoading ? 'Loading...' : 'Enviar'}</span>
                </Button>
              </BtnWrapper>
            </FormWrapper>
          </NewsletterRow>
        </NewsletterWrapper>
      </NewsletterContainer>
    </>
  )
}

export default Newsletter
