import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  // margin-top: -1.5%;
  display: flex;
  justify-content: center;
  color: #eceff4;
`

export const Wrapper = styled.div`
  width: 72%;
  display: flex;
  justify-content: space-around; 
  align-items: center;

  img{
    height: 29rem;
  }

  @media (max-width: 1440px){
    img{
      height: 17rem;
    }
  }

  @media (max-width: 1280px){
    flex-direction: column;
  }

  @media(max-width: 768px){
    width: 100%;
    justify-items: space-evenly;
    img{
      // height: 20rem;
      margin-bottom: 80px;
    }
  }

`

export const TextContainer = styled.div`
  height: 40%; 
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  h1 {
    font-size: 3.9rem;
    font-weight: 400;
  }

  p{
    font-weight: 300;
    font-size: 1.8rem;
  }

  @media (max-width: 1440px){
    h1{
      font-size: 2.4rem;
    }

    p{
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1280px){
    width: 50%;
    align-items: center;
    text-align: center;
  
    h1{
      font-size: 2rem;
    }

    p{
      font-size: 1rem;
    }
  }

  @media(max-width: 768px){
    width: 70%;
    height: 25%;
  
    h1{
      font-size: 1.5rem;
    }
  }
`

export const Btn = styled.button`
  padding: 0.8em 1.8em;
  border: 2px solid #fff;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: .3s;
  z-index: 1;
  font-family: inherit;
  color: #fff;

  &::before{
      content: '';
      width: 0;
      height: 300%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #fff;
      transition: .5s ease;
      display: block;
      z-index: -1;
  }

  &:hover::before {
    width: 105%;
  }

  &:hover {
    color: #000;
  }
`