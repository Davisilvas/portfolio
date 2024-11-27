import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #2e3440;
  width: 150px;
  height: 300px;
  border-radius: 10px; 
`

export const MenuContainer = styled.div`
  width: 37%;
  margin-top: 4px;
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