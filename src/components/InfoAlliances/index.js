import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Title,
  Description,
  InfoGrid
} from './AlliancesElements'
import Brands from './Brands'

const images = [
  {
    id: 1,
    src: require('../../images/cupra.png').default,
    title: 'Cupra',
    description: '10% off en suplementos',
    cat: 'Suplementación'
  },
  {
    id: 2,
    src: require('../../images/mgym.png').default,
    title: 'MGYM',
    description: '$500 mes sin inscripción',
    cat: 'Gimnasios'
  },
  {
    id: 3,
    src: require('../../images/nacion.png').default,
    title: 'Nación',
    description: '15% off',
    cat: 'Training'
  },
  {
    id: 4,
    src: require('../../images/onebalance.png').default,
    title: 'One balance',
    description: '10% off',
    cat: 'Alimentación'
  },
  {
    id: 5,
    src: require('../../images/psicologia.png').default,
    title: 'Psicología',
    description: '15% off Terapia',
    cat: 'Psicología'
  },
  {
    id: 6,
    src: require('../../images/raw.png').default,
    title: 'Raw',
    description: '$350 mes sin inscripción',
    cat: 'Gimnasios'
  },
  {
    id: 7,
    src: require('../../images/road.png').default,
    title: 'Road',
    description: '1 semana gratis',
    cat: 'Training'
  },
  {
    id: 8,
    src: require('../../images/shukra.png').default,
    title: 'Shukra',
    description: '1 consulta de presoterapia gratis y 10% off',
    cat: 'Wellness'
  },
  {
    id: 9,
    src: require('../../images/tastyweek.png').default,
    title: 'Tastyweek',
    description: '30% off primer pedido + 10% off futuros pedidos',
    cat: 'Alimentación'
  },
  {
    id: 10,
    src: require('../../images/fisioestudio.png').default,
    title: 'Fisioestudio',
    description: '20% en la primera cita  o 30 min de presoterapia',
    cat: 'Fisioterapia'
  },
  {
    id: 11,
    src: require('../../images/anytime.png').default,
    title: 'Anytime',
    description: '0% Inscripción + Llave de acceso $200 + Mensualidad $625*',
    cat: 'Gimnasios'
  }
]

const InfoAlliances = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Title>Alianzas</Title>
            <Description>
              Para ofrecerte un servicio completo contamos con tarifas
              especiales, descuentos y promociones de marcas aliadas que
              complementan nuestros servicios para vivir una experiencia
              completa. Solicita el cupón del mes.
            </Description>
          </InfoRow>
          <InfoGrid>
            {console.log(images)}
            {images
              .map((image) => (
                <Brands
                  key={image.id}
                  img={image.src}
                  description={image.description}
                  title={image.title}
                  cat={image.cat}
                />
              ))
              .sort((a, b) => a.props.title.localeCompare(b.props.title))}
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoAlliances
