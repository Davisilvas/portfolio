import React, { useState } from 'react';
import { Container, Hamburger, MenuOverlay, CloseButton, Menu, MenuItem } from './styled';

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
          <MenuItem href="#home" onClick={closeMenu}>Home</MenuItem>
          <MenuItem href="#about" onClick={closeMenu}>About</MenuItem>
          <MenuItem href="#services" onClick={closeMenu}>Services</MenuItem>
          <MenuItem href="#contact" onClick={closeMenu}>Contact</MenuItem>
        </Menu>
      </MenuOverlay>
    </Container>
  );
};

export default MobileMenu;
