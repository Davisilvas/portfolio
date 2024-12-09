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
  width: 63%;
  padding: 30px;
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
    width: 85%;
    
    p{
      font-size: 1rem;
      }
      }
      
  @media(max-width:480px){
    width:95%;

    h1{
      font-size: 1.7rem;
    }
  
    p{
      font-size: .9rem;
    }
  }
`

export const SkillsSection = styled.div`
  width: 55%;
  color: #eceff4;
  margin-top: 3.5rem;
  
  h1{
    font-weight: 400;
  }

  @media(max-width: 768px){
    width: 80%;
  }

  @media(max-width: 480px){
    margin-top: 2rem;
  }
`

