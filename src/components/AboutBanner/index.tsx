import React from 'react'

import SkillsContainer from '../SkillsContainer'

import { Container, ContentSection } from './styled'

const AboutBanner = () => {
  return (
    <Container>
      <ContentSection>
        <h1>About me</h1>
        <p>
          Currently I'm focussed on web development and recently I have been dedicating myself to develop my hard skills. Although my knowladge rely mostly on web development I'm open to learn all kinds of technologies and learn about other areas. And Even Though my mother tongue is Portuguese, I have an advanced level of English. At the moment I'm looking foward to a project that I can embrace in orther to develop my hard skills and also my soft skills.
        </p>
      </ContentSection>
      <SkillsContainer />
    </Container>
  )
}

export default AboutBanner