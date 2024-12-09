import React, { useState } from 'react';
import { Container, Hamburger, MenuOverlay, CloseButton, Menu, MenuItem } from './styled';
import { Link } from 'react-router';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Container>
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MenuOverlay isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>
        <Menu>
          <MenuItem onClick={closeMenu}><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={closeMenu}><Link to="/about">Sobre</Link></MenuItem>
          <MenuItem onClick={closeMenu}><Link to="/projects">Projetos</Link></MenuItem>
          <MenuItem href="#contact" onClick={closeMenu}>Contact</MenuItem>
        </Menu>
      </MenuOverlay>
    </Container>
  );
};

export default MobileMenu;
