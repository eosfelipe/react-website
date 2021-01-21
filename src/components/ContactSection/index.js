import React, { useRef, useState, useEffect } from "react";
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
  const firstRender = useRef(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [mailSent, setMailSent] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      toast("Favor de llenar todos los campos");
    } else {
      axios({
        method: "POST",
        url: "http://localhost/api/",
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
          setDisabled(true);
        })
        .catch((error) => setError(error.message));
    }
  };

  const handleInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (formData.message !== "") {
      setDisabled(false);
    }
  }, [formData.name, formData.email, formData.phone, formData.message]);

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactRow>
            <Title>Contáctanos</Title>
            <FormWrapper action="#" autoComplete="off">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  name="name"
                  onChange={handleInput}
                  value={formData.name}
                  required={true}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  name="phone"
                  onChange={handleInput}
                  value={formData.phone}
                  required={true}
                  maxLength={10}
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleInput}
                  value={formData.email}
                  required={true}
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
              <InputGroup style={{ marginBottom: 0 }}>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
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
