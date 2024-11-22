import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  margin-top: -1.5%;
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
    height: 23rem;
  }

  @media (max-width: 1440px){
    img{
      height: 17rem;
    }
  }

  @media (max-width: 1280px){
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  height: 35%; 
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
  }

  span{
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media (max-width: 1440px){
  h1{
      font-size: 2.4rem;
    }

    span{
      font-size: 1.2rem;
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

export const ImgContainer = styled.div`
  
  img{
      height: 23rem;
    }

  @media (max-width: 1440px){
    img{
      height: 17rem;
    }
  }
`