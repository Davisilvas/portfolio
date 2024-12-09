import React from 'react'
import { Container, Menu, LinkList } from './styled'
import { Link } from 'react-router'
import MobileMenu from '../MobileMenu'
import logo from '../../assets/icons/my-icon.svg'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu>
        <LinkList>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
          <li><Link to='/projects'>Projetos</Link></li>
          <li>Contact</li>
        </LinkList>
        <MobileMenu />
      </Menu>
    </Container>
  )
}

export default Navbar