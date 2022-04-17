import styled from 'styled-components'
import Display from 'Display/index'
import History from 'History/index'
import Keypad from 'Keypad/index'
import ControlPanel from 'ControlPanel/index'

export const MainPage = styled.div`
heigth: 500px;
display: grid; 
grid-template-columns: 5fr 2fr; 
grid-template-rows: 2fr 6fr; 
gap: 10px 10px; 
grid-template-areas: 
  "display controlePanel"
  "keypad controlePanel"; 
 
`
export const StyledDisplay = styled(Display)`
grid-area: display;
border-bottom: 2px solid;
 margin: 0 0 0 10px;
`
export const StyledControlePanel = styled(ControlPanel)`
grid-area: controlePanel;
border-left: 2px solid;
margin: 0 10px
overflow-y: auto;
`

export const StyledKeypad = styled(Keypad)`
grid-area: keypad; 
margin: 0 0 0 10px;
`