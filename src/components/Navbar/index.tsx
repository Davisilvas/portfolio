import React from 'react'
import { Container, Menu } from './styled'
import MobileMenu from '../MobileMenu'
import logo from '../../assets/icons/my-icon.svg'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu>
        {/* <ul>
          <li>about</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}
        <MobileMenu />
      </Menu>
    </Container>
  )
}

export default Navbar