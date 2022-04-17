import {
  SettingsStyled,
  SelectStyled,
  OptionStyled,
  SwitchThemeStyled,
  ButtonStyled
} from "./components";
import React from 'react';
import propTypes from "prop-types";

export default class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.selectHandle = this.selectHandle.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  selectHandle(event){
    this.props.switchTheme(event.target.value)
  }

  clickHandle(event){
    //clear history from redux
    this.props.clearhistory()
  }

  render() {
    return (
      <SettingsStyled>
        <h1>Settings</h1>
        <SwitchThemeStyled>
          <span>Switch theme</span>
          <SelectStyled onChange={e => this.selectHandle(e)} defaultValue={"light"}>
            <OptionStyled value={"light"} >Light Theme</OptionStyled>
            <OptionStyled value={"dark"}>Dark Theme</OptionStyled>
          </SelectStyled>
          <ButtonStyled onClick={e => this.clickHandle(e)}>Clear All History</ButtonStyled>
        </SwitchThemeStyled>
      </SettingsStyled>
    )
  }
}
SettingsComponent.propTypes = {
  data: propTypes.func
}