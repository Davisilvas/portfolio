import SkillsContainer from '../SkillsContainer'

import { Container, ContentSection, SkillsSection } from './styled'

const AboutBanner = () => {
  return (
    <Container>
      <ContentSection>
        <h1>Sobre mim</h1>
        <p>
          Atualmente, estou focado no desenvolvimento web e recentemente tenho me dedicado a aprimorar minhas hard skills. Embora meu conhecimento esteja principalmente no desenvolvimento web, estou aberto a aprender todos os tipos de tecnologias e explorar outras áreas. No momento, estou em busca de um projeto no qual possa me engajar para desenvolver tanto minhas hard skills quanto minhas soft skills.
        </p>
      </ContentSection>
      <SkillsSection>
        <h1>Minhas Skills</h1>
        <SkillsContainer />
      </SkillsSection>
    </Container>
  )
}

export default AboutBanner