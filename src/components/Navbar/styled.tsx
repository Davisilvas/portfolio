import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 6px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  // background-color: #2e3440;
  color: #eceff4;

  img{
    height: 3.5rem;
  }
`

export const Menu = styled.nav`
  width: 30%;
  height:100%;
  // background-color: #ccff00;

  ul{
    width: 95%;
    height: 80%;
    font-size: 1.8rem;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`