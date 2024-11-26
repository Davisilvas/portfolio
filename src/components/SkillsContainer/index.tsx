import React from 'react'

import { Container, Icon } from './styled'
import csharp from '../../assets/tecIcons/c-sharp.svg'
import css from '../../assets/tecIcons/css.svg'
import database from '../../assets/tecIcons/database.svg'
import git from '../../assets/tecIcons/git.svg'
import html from '../../assets/tecIcons/html.svg'
import java from '../../assets/tecIcons/java.svg'
import js from '../../assets/tecIcons/javascript.svg'
import nodeJs from '../../assets/tecIcons/nodeJs.svg'
import php from '../../assets/tecIcons/php.svg'
import python from '../../assets/tecIcons/python.svg'
import react from '../../assets/tecIcons/react.svg'
import typscript from '../../assets/tecIcons/typescript.svg'

const SkillsContainer = () => {
  return (
    <Container>
      <Icon>
        <img src={csharp} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={css} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={database} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={git} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={html} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={java} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={js} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={nodeJs} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={php} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={python} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={react} alt="c-sharp icon"/>
      </Icon>
      <Icon>
        <img src={typscript} alt="c-sharp icon"/>
      </Icon>
      </Container>
  )
}

export default SkillsContainer