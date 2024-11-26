import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentSection = styled.section`
  width: 45%;
  padding: 30px;
  margin-top: -100px;
  background-color: #2e3440;
  border-radius: 3px;
  color: #eceff4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1{
    font-weight: 400;
    font-size: 2.3rem;
  }
  
  p{
    font-weight: 300;
    margin-top: 10px;
    font-size: 1.3rem;
  }

  @media(max-width: 1440px){
    width: 65%;
    margin-top: 30px;

    h1{
      font-size: 2.0rem;
    }
  
    p{
      font-size: 1.2rem;
    }
  }

  @media(max-width: 768px){
    width: 80%;

    p{
      font-size: 1rem;
    }
  }

  @media(max-width:480px){
    width: 100%;

    h1{
      font-size: 1.7rem;
    }
  
    p{
      font-size: .9rem;
    }
  }
`

export const CuriositySection = styled(ContentSection)`
  margin-bottom: 50px;
`

