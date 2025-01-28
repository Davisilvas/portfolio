import React from 'react'
import { Container, Menu, LinkList, StyledLink } from './styled'
import MobileMenu from '../MobileMenu'
import logo from '../../assets/icons/my-icon.svg'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu>
        <LinkList>
          <li><StyledLink to='/'>Home</StyledLink></li>
          <li><StyledLink to='/about'>Sobre</StyledLink></li>
          <li><StyledLink to='/projects'>Projetos</StyledLink></li>
          <li>Contact</li>
        </LinkList>
        <MobileMenu />
      </Menu>
    </Container>
  )
}

export default Navbar