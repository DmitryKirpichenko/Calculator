import styled from 'styled-components'

export const SettingsStyled = styled.div`
  width: 20%;
  margin-left: 8%;
  
  h1{
    font-size: 30px;
  }
`
const commonStyle = `
  width: 100%;
  height: 40px;
`
export const SwitchThemeStyled = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  `
export const SelectStyled = styled.select`
  ${commonStyle};
  border-radius: 5px;
  cursor: pointer;
  `
export const OptionStyled = styled.option`
  ${commonStyle};
`

export const ButtonStyled = styled.button`
  ${commonStyle};
  border-radius: 5px;
  margin-top: 20px;
  text-align: left;
  cursor: pointer;

  :hover {
    border-color: #a4c2db;
  }
`