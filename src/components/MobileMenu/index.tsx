import React, { useState } from 'react';
import { Container, Hamburger, MenuOverlay, CloseButton, Menu, MenuItem, StyledLink } from './styled';

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
          <MenuItem onClick={closeMenu}><StyledLink to="/">Home</StyledLink></MenuItem>
          <MenuItem onClick={closeMenu}><StyledLink to="/about">Sobre</StyledLink></MenuItem>
          <MenuItem onClick={closeMenu}><StyledLink to="/projects">Projetos</StyledLink></MenuItem>
          <MenuItem href="#contact" onClick={closeMenu}>Contact</MenuItem>
        </Menu>
      </MenuOverlay>
    </Container>
  );
};

export default MobileMenu;
