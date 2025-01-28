import React from 'react'

import { CardContainer, MenuContainer, MenuBtnOne, MenuBtnTwo, MenuBtnThree,ImageContainer, TextContainer } from './styled'

interface CardProps{
  imgSrc: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({imgSrc, title, desc}) => {
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
        <p>{desc}</p>
      </TextContainer>
    </CardContainer>
  )
}

export default Card