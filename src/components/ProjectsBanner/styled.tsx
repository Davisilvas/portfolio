import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  h1{
    color: #eceff4;
    margin: 25px;
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
  }
`

export const CardsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: space-around;

  .text-container-title{
    text-align: start;
    font-size: 1.5rem;
    margin: 5px;
  }

  @media (max-width: 768px){
    width: 85%;
  }

  @media (max-width: 480px){
    width: 95%;
  }
`