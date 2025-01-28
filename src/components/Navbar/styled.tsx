import styled from "styled-components";
import { Link } from 'react-router';


export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 6px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #eceff4;

  img{
    height: 3.5rem;
  }
  
  @media(max-width: 1440px){
    img{
      height: 3.3rem;
    }
  }

  @media(max-width: 1080px){
    img{
      height: 2.8rem;
    }
  }
`

export const Menu = styled.nav`
  width: 30%;
  height:100%;

  @media(max-width: 1440px){
    width: 10%;
  }
`

export const LinkList = styled.ul`
    width: 95%;
    height: 80%;
    font-size: 1.8rem;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 1440px){
      display: none;
    }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eceff4;

  &:hover{
    color: #d8dee9;
  }
`