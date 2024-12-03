import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #2e3440;
  height: 600px;
  width: 550px;
  border-radius: 10px; 
  margin: 10px;

  @media (max-width: 768px){
    height: 750px;
  }

  @media (max-width: 480px){
    height: 550px;
  }
`

export const MenuContainer = styled.div`
  width: 13%;
  margin-top: 10px;
  margin-left: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const MenuBtn = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 50%;
`

export const MenuBtnOne = styled(MenuBtn)`
  background-color: #ff605c;
`
export const MenuBtnTwo = styled(MenuBtn)`
  background-color: #ffbd44;
`
export const MenuBtnThree = styled(MenuBtn)`
  background-color: #00ca4e;
`

export const ImageContainer = styled.div`
  height: 50%;
  width: 95%; 
  margin-top: 15px;
  justify-self: center;
  

  img{
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 480px){
    height: 40%;
  }
`

export const TextContainer = styled.div`
  width:95%;
  color: #eceff4;
  padding: 10px;
  font-weight: 300;

  h1{
    font-size: 1.1rem;
    font-weight: 500;
  }
  p{
    font-size: 1rem;
  }
`