import React from 'react'
import IMG from "../../assets/photos/profile-icon.png"
import { Container, TextContainer, Wrapper, Btn } from './styled'

const HomeBanner = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <h1>Hi! I'm <br /> Davi Santos</h1>
          <span>I'm a fullstack web developer</span>
          <Btn>Get in touch</Btn>
        </TextContainer>
          <img src={IMG} alt='profile-pic' />
      </Wrapper>
    </Container>
  )
}

export default HomeBanner