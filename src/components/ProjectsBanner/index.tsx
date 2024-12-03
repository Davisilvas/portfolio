import React from 'react'
import { Container, CardsContainer } from './styled'
import Card from '../Card'
import images from "../../mock/projects.json"

const ProjectsBanner = () => {
  return (
    <Container>
      <h1>Alguns de meus projetos pessoais!</h1>
      <CardsContainer>
        {images.map((item) =>{
          return(
            <Card imgSrc={item.imageLink} title={item.title} />
          )
        })}
      </CardsContainer>
    </Container>
  )
}

export default ProjectsBanner