import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Title,
  Description,
  InfoGrid,
} from './AlliancesElements'
import Brands from './Brands'

const images = [
  {id:1, src: require('../../images/cupra.png').default, title:'Cupra', description:'10% off en suplementos'},
  {id:2, src: require('../../images/mgym.png').default, title:'MGYM', description:'$500 mes sin inscripción'},
  {id:3, src: require('../../images/nacion.png').default, title:'Nación', description:'15% off'},
  {id:4, src: require('../../images/onebalance.png').default, title:'One balance', description:'10% off'},
  {id:5, src: require('../../images/psicologia.png').default, title:'Psicología', description:'15% off Terapia'},
  {id:6, src: require('../../images/raw.png').default, title:'Raw', description:'$350 mes sin inscripción'},
  {id:7, src: require('../../images/redcord.png').default, title:'Redcord', description:'2 Consultas gratis'},
  {id:8, src: require('../../images/road.png').default, title:'Road', description:'1 semana gratis'},
  {id:9, src: require('../../images/shukra.png').default, title:'Shukra', description:'1 consulta de presoterapia gratis y 10% off'},
  {id:10, src: require('../../images/tastyweek.png').default, title:'Tastyweek', description:'30% off primer pedido + 10% off futuros pedidos'},
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
            {
              images.map(image => (
                <Brands key={image.id} img={image.src} description={image.description} title={image.title} />
              ))
            }
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoAlliances
