import React from "react";
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
  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactRow>
            <Title>Contacto</Title>
            <FormWrapper>
              <InputGroup>
                <Input placeholder="Nombre completo" />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Teléfono" />
                <Input placeholder="E-mail" />
              </InputGroup>
              <InputGroup>
                <TextArea placeholder="Mensaje"></TextArea>
              </InputGroup>
              <InputGroup>
                <Button>Enviar</Button>
              </InputGroup>
            </FormWrapper>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
