import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;


  background-color: #2e3440;
  color: #eceff4;

  a{
    text-decoration: none;
    color: #eceff4;
  }

  a:hover{
    color: #d8dee9;
  }

  @media(max-width: 768px){
    flex-direction: column;
  }
`