import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: none;

  @media(max-width: 1440px){
    display: block;
    top:14px;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1000;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #eceff4
;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
  }

  /* Animation for open state */
  ${({ isOpen }) =>
    isOpen &&
    `
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    `}
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 70%;
  height: 100%;
  background-color: #2e3440;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 999;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #eceff4;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #eceff4;
  font-size: 1.2rem;
  margin: 10px 0;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;
