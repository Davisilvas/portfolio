import React from 'react'

import { CardContainer, MenuContainer, MenuBtnOne, MenuBtnTwo, MenuBtnThree } from './styled'

const Card = () => {
  return (
    <CardContainer>
      <MenuContainer>
        <MenuBtnOne />
        <MenuBtnTwo />
        <MenuBtnThree />
      </MenuContainer>
    </CardContainer>
  )
}

export default Card