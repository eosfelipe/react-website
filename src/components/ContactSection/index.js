import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Title,
  FormWrapper,
  InputGroup,
  Input,
  TextArea,
  Button,
} from "./ContactElements";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost/contact/",
      headers: { "content-type": "application/json" },
      data: formData,
    })
      .then((result) => {
        if (result.data.sent) {
          setMailSent(result.data.sent);
          toast(`${result.data.message}`);
          setError(false);
        } else {
          setError(true);
          toast(`${result.data.message}`, { onClose: () => setError(false) });
        }
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => setError(error.message));
  };

  const handleInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactRow>
            <Title>Contacto</Title>
            <FormWrapper action="#">
              <InputGroup>
                <Input
                  placeholder="Nombre completo"
                  name="name"
                  onChange={handleInput}
                  value={formData.name}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Teléfono"
                  name="phone"
                  onChange={handleInput}
                  value={formData.phone}
                />
                <Input
                  placeholder="E-mail"
                  name="email"
                  onChange={handleInput}
                  value={formData.email}
                />
              </InputGroup>
              <InputGroup>
                <TextArea
                  placeholder="Mensaje"
                  name="message"
                  onChange={handleInput}
                  value={formData.message}
                />
              </InputGroup>
              <InputGroup>
                <Button type="submit" onClick={handleSubmit}>
                  Enviar
                </Button>
              </InputGroup>
              {mailSent && <ToastContainer />}
              {error && <ToastContainer />}
            </FormWrapper>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
