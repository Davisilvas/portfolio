import React from 'react'
import { Container, Menu, LinkList } from './styled'
import MobileMenu from '../MobileMenu'
import logo from '../../assets/icons/my-icon.svg'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu>
        <LinkList>
          <li>about</li>
          <li>Projects</li>
          <li>Contact</li>
        </LinkList>
        <MobileMenu />
      </Menu>
    </Container>
  )
}

export default Navbar