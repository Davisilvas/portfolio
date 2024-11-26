import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  
  @media(max-width: 1440px){
    margin-bottom: 40px;
  }

  @media(max-width: 1280px){
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

    @media(max-width: 1024px){
    grid-template-columns: repeat(4, 1fr);
  }

`

export const Icon = styled.div`
  width: 100%;
  padding-top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;

  img{
    height: 4.5rem;
  }

  @media(max-width: 1440px){
    img{
      height: 3.8rem;
    }
  }

  @media(max-width: 480px){
    img{
      height: 3rem;
    }
  }
`