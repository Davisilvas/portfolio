import React from 'react'

import { CardContainer, MenuContainer, MenuBtnOne, MenuBtnTwo, MenuBtnThree,ImageContainer, TextContainer } from './styled'

interface CardProps{
  imgSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({imgSrc, title}) => {
  return (
    <CardContainer>
      <MenuContainer>
        <MenuBtnOne />
        <MenuBtnTwo />
        <MenuBtnThree />
      </MenuContainer>
      <ImageContainer>
        <img src={imgSrc} alt={title} />
      </ImageContainer>
      <TextContainer>
        <h1 className='text-container-title'>
        {title}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugit enim atque repellat aperiam maiores molestias exercitationem unde corrupti quas illo excepturi voluptatibus ratione, sed esse ducimus quis commodi!</p>
      </TextContainer>
    </CardContainer>
  )
}

export default Card